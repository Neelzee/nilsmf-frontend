from django.shortcuts import render

from rest_framework import viewsets

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

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
def get_author(request, author_id):
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
        
        
def media_list(request):
    match request.method:
        case "GET":
            medias = Media.objects.all()
            serializer = MediaSerializer(medias, many=True)
            return JsonResponse(serializer.data, safe=False)
        case _:
            return HttpResponse(status=404)
        
        
def get_media(request, media_id):
    try:
        media = Media.objects.get(pk=media_id)
        
        match request.method:
            case "GET":
                serializer = MediaSerializer(media)
                return JsonResponse(serializer.data)
            case _:
                return HttpResponse(status=404)
        
    except Article.DoesNotExist:
        return HttpResponse(status=404)