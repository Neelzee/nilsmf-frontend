from rest_framework.serializers import ModelSerializer

from .models import Author, Media, Article


class AuthorSerializer(ModelSerializer):
    
    class Meta:
        model = Author
        fields = ("author_id", "first_name", "last_name")
        
        
class MediaSerializer(ModelSerializer):
    
    class Meta:
        model = Media
        fields = ("media_id", "is_video", "description", "media")
        
        
        
class ArticleSerializer(ModelSerializer):
    
    class Meta:
        model = Article
        fields = (
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
        
          
        
