from django.http import HttpResponse, JsonResponse, HttpRequest
from django.views.decorators.csrf import csrf_exempt
from django.middleware.csrf import get_token

@csrf_exempt
def get_csrf_token(request: HttpRequest) -> HttpResponse:
    """Creates, and returns a CSRF token

    Args:
        request (HttpRequest): Request

    Returns:
        HttpResponse: Json response
    """
    token = get_token(request)
    return JsonResponse({"csrfToken": token})