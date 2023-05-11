import django
from django.db import models
from django.db.models import Model
import datetime as dt

class Author(Model):
    author_id = models.PositiveBigIntegerField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    
    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"
    
    
class Media(Model):
    media_id = models.PositiveBigIntegerField(primary_key=True)
    is_video = models.BooleanField()
    description = models.CharField(max_length=150)
    media = models.FileField(upload_to="media/files/")
    
    def __str__(self) -> str:
        return f"{self.description}"
    
    
    
class Article(Model):
    article_id = models.PositiveBigIntegerField(primary_key=True)
    title = models.CharField(max_length=150)
    author_id = models.ForeignKey(Author, on_delete=models.SET_NULL, null=True)
    frontpage_media_id = models.ForeignKey(Media, on_delete=models.SET_NULL, null=True, related_name="frontpage_media")
    body = models.TextField()
    body_media_id = models.ForeignKey(Media, on_delete=models.SET_NULL, null=True, related_name="body_media", blank=True)
    is_published = models.BooleanField()
    published_date = models.DateField(default=django.utils.timezone.now)
    published_time = models.TimeField(default=django.utils.timezone.now)
    last_updated = models.DateField(blank=True, null=True)
    
    class Meta:
        ordering = ["published_date"]
    
    def __str__(self) -> str:
        return f"{self.title}"