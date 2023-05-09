from django.shortcuts import render

from rest_framework import viewsets

from .serializers import ProjectSerializers

from .models import Project

class ProjectView(viewsets.ModelViewSet):
    serializer_class = ProjectSerializers
    
    queryset = Project.objects.all()