from django.contrib import admin
from django.contrib.admin import ModelAdmin


# Register your models here.
from .models import Author, Media, Article


class AuthorAdmin(ModelAdmin):
    list_display = ("author_id", "first_name", "last_name")
    

class MediaAdmin(ModelAdmin):
    list_display = ("media_id", "is_video", "description", "media")
    
    
class ArticleAdmin(ModelAdmin):
    list_display = (
        "article_id",
        "title",
        "author_id",
        "frontpage_media_id",
        "body",
        "body_media_id",
        "is_published",
        "published_date",
        "last_updated"
        )
    

admin.site.register(Author, AuthorAdmin)
admin.site.register(Media, MediaAdmin)
admin.site.register(Article, ArticleAdmin)