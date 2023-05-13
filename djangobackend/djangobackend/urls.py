"""djangobackend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from rest_framework import routers

router = routers.DefaultRouter()

from media import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/article/<int:article_id>/", views.get_article),
    path("api/article/latest/", views.get_latest_articles),
    path("api/author/<int:author_id>/", views.get_author),
    path("api/media/<int:media_id>/", views.get_media),
    path("api/article/all/", views.articles_list),
    path("api/author/all/", views.author_list),
    path("api/media/all/", views.media_list),
]
