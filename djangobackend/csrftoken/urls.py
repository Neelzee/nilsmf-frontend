from django.urls import path
from . import views

urlpatterns = [
	path('csrf_token', views.get_csrf_token, name='csrf_token')
]