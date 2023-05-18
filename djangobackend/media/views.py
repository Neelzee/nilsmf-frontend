from django.shortcuts import get_object_or_404, render
import json
from django.http import HttpResponse, JsonResponse, HttpRequest
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import permissions, status
from django.contrib.auth.decorators import login_required
from django.contrib.sessions.models import Session

import datetime as dt

from .serializer import AuthorSerializer, MediaSerializer, ArticleSerializer

from .models import Author, Media, Article

def articles_list(request: HttpRequest) -> HttpResponse:
    """Returns all the articles in the datatbase

    Args:
        request: Request

    Returns:
        _type_: _description_
    """
    match request.method:
        case "GET":
            articles = Article.objects.all()
            serializer = ArticleSerializer(articles, many=True)
            return JsonResponse(serializer.data, safe=False)
        case _:
            return HttpResponse(status=404)
        
def get_article(request: HttpRequest, article_id: int) -> HttpResponse:
    """Gets the article on the given id

    Args:
        request: Request
        article_id: Article ID

    Returns:
        The given article, or 404
    """
    try:
        article = Article.objects.get(pk=article_id)
        
        match request.method:
            case "GET":
                serializer = ArticleSerializer(article)
                return JsonResponse(serializer.data)
            case _:
                return HttpResponse(status=404)
        
    except Article.DoesNotExist:
        return HttpResponse(status=404)



def get_author(request: HttpRequest, author_id: int) -> HttpResponse:
    try:
        author = Author.objects.get(pk=author_id)
        
        match request.method:
            case "GET":
                serializer = AuthorSerializer(author)
                return JsonResponse(serializer.data)
            case _:
                return HttpResponse(status=404)
        
    except Article.DoesNotExist:
        return HttpResponse(status=404)
    
    

def author_list(request: HttpRequest) -> HttpResponse:
    match request.method:
        case "GET":
            authors = Author.objects.all()
            serializer = AuthorSerializer(authors, many=True)
            return JsonResponse(serializer.data, safe=False)
        case _:
            return HttpResponse(status=404)
        
def media_list(request: HttpRequest) -> HttpResponse:
    match request.method:
        case "GET":
            medias = Media.objects.all()
            serializer = MediaSerializer(medias, many=True)
            return JsonResponse(serializer.data, safe=False)
        case _:
            return HttpResponse(status=404)
        
def get_media(request: HttpRequest, media_id) -> HttpResponse:
    try:
        media = Media.objects.get(pk=media_id)
        
        match request.method:
            case "GET":
                serializer = MediaSerializer(media)
                return JsonResponse(serializer.data)
            case _:
                return HttpResponse(status=404)
        
    except Media.DoesNotExist:
        return HttpResponse(status=404)
    
    
def get_latest_articles(request: HttpRequest) -> HttpResponse:
    """Gets the latest article

    Args:
        request: Request
    """
    articles = Article.objects.all()

    article = None
    latest_date = dt.datetime.utcfromtimestamp(0)
    
    for art in articles:
        date = dt.datetime.combine(art.published_date, art.published_time)
        if (date > latest_date) and art.is_published:
            latest_date = date
            article = art

    if article is None:
        return HttpResponse(status=404)
    else:
        return JsonResponse(ArticleSerializer(article).data)
    
            

@api_view(["PUT"])
@permission_classes([permissions.IsAdminUser])
@login_required
def edit_article(request: HttpRequest, article_id: int) -> HttpResponse:
    """Replaces the given article,
    with the specified ID, if it exist,
    and if the user has Django Admin permissions.
    """
    article = get_object_or_404(Article, id=article_id)
    serializer = ArticleSerializer(article, data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(["PUT"])
@permission_classes([permissions.IsAdminUser])
@login_required
def delete_article(request: HttpRequest, article_id: int) -> Response:
    
    article = get_object_or_404(Article, id=article_id)
    
    session_id = request.COOKIES.get("sessionid")
    
    if session_id:
        try:
            _ = Session.get(session_key = session_id)
            article.delete()
            return HttpResponse(status=status.HTTP_200_OK)
        except Session.DoesNotExist:
            return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)
    return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)

def create_article(request: HttpRequest) -> HttpResponse:
    print(request.COOKIES)
    return HttpResponse(status=status.HTTP_400_BAD_REQUEST)
    title = request.POST.get("title")
    fp_media_desc = request.POST.get("fp_media_description")
    fp_media_type = request.POST.get("fp_media_type")
    fp_media = request.POST.get("frontpage_media")
    body = request.POST.get("body")
    is_published = request.POST.get("is_published")
    
    # Invalid form
    if fp_media is None:
        return HttpResponse(status=status.HTTP_400_BAD_REQUEST)
    
    media = Media.objects.create(
        is_video=fp_media_type=="1",
        description=fp_media_desc,
        media=fp_media
    )
    
    article = Article.objects.create(
        title=title,
        author_id=0,
        frontpage_media_id=media.media_id,
        body=body,
        is_published=is_published,
        publish_date = dt.datetime.now(),
        publish_time = dt.datetime.now()
    )
    
        
    session_id = request.COOKIES.get("sessionid")
    
    if session_id:
        try:
            # Validates the current user?
            _ = Session.get(session_key = session_id)
            # Saves the data?
            media.save()
            article.save()
            # Everything is okay, article was created
            return HttpResponse(status=status.HTTP_201_CREATED)
        # Not authorizerd
        except Session.DoesNotExist:
            return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)
    # Not authorizerd
    return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)