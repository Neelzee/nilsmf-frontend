import os
import sys


from django.core.wsgi import get_wsgi_application

sys.path.append('C:/Users/nilsi/Desktop/nilsmf')
sys.path.append('C:/Users/nilsi/Desktop/nilsmf/djangobackend')

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'djangobackend.settings')

application = get_wsgi_application()
