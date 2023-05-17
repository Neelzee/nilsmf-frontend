from django.shortcuts import get_object_or_404, render


from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import permissions, status
from django.contrib.auth.decorators import login_required

import datetime as dt

from .serializer import AuthorSerializer, MediaSerializer, ArticleSerializer

from .models import Author, Media, Article

@csrf_exempt
def articles_list(request):
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
        
@csrf_exempt
def get_article(request, article_id: int):
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



@csrf_exempt
def get_author(request, author_id: int):
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
    
    

@csrf_exempt
def author_list(request):
    match request.method:
        case "GET":
            authors = Author.objects.all()
            serializer = AuthorSerializer(authors, many=True)
            return JsonResponse(serializer.data, safe=False)
        case _:
            return HttpResponse(status=404)
        
@csrf_exempt    
def media_list(request):
    match request.method:
        case "GET":
            medias = Media.objects.all()
            serializer = MediaSerializer(medias, many=True)
            return JsonResponse(serializer.data, safe=False)
        case _:
            return HttpResponse(status=404)
        
@csrf_exempt
def get_media(request, media_id):
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
    
    
@csrf_exempt
def get_latest_articles(request):
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
def edit_article(request, article_id: int) -> Response:
    """Replaces the given article,
    with the specified ID, if it exist,
    and if the user has Django Admin permissions.
    """
    article = get_object_or_404(Article, id=article_id)
    serializer = ArticleSerializer(article, data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    

def delete_article(request, article_id: int) -> Response:
    
    article = get_object_or_404(Article, id=article_id)
    serializer = ArticleSerializer(article, data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    pass