from django.contrib.staticfiles.views import serve as staticfiles_serve
from django.urls import re_path
from django.contrib import admin
from django.urls import path, include

from rest_framework import routers

router = routers.DefaultRouter()

from media import views
from csrftoken import views as csrf_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/article/<int:article_id>/", views.get_article),
    path("api/article/latest/", views.get_latest_articles),
    path("api/author/<int:author_id>/", views.get_author),
    path("api/media/<int:media_id>/", views.get_media),
    path("api/article/all/", views.articles_list),
    path("api/author/all/", views.author_list),
    path("api/media/all/", views.media_list),
    # For editing articles
    path("api/edit-article/<int:author_id>/", views.edit_article),
    # For creating articles
    path("api/create-article/", views.create_article),
    # For csrf tokens
    path('csrf_token', csrf_views.get_csrf_token),
    # For user login/creation
    path("api/", include("users.urls")),
]
