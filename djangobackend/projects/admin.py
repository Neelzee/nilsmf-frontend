from django.contrib import admin

# Register your models here.
from .models import Project

class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title","content","post_date","is_posted")
    
    
    
    
admin.site.register(Project, ProjectAdmin)