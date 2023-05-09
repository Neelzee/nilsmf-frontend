from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=150)
    content = models.CharField(max_length=300)
    is_posted = models.BooleanField(default=False)
    
    def __str__(self) -> str:
        return self.title