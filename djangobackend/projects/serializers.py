from rest_framework import serializers


from .models import Project


class ProjectSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = Project
        fields = ("id", "title", "content", "post_date","is_posted")