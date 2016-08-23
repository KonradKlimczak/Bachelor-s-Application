import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.db import IntegrityError
from django.contrib.auth.models import User
from django.shortcuts import redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth import logout

@require_http_methods(["POST"])
def register_user(request):
    '''
    function for user registration
    '''
    post_object = json.loads(request.body)
    try:
        user = User.objects.create_user(
            post_object['user-name'], post_object['email'], post_object['password']
        )
        user.save()
        return JsonResponse({'status': 'success', 'message': 'User account was created successfully.'})
    except IntegrityError:
        return JsonResponse({'status': 'error', 'message': 'This user name is already taken.'})

def login_user(request):
    '''
    login functionality
    '''
    post_object = json.loads(request.body)
    username = post_object['user-name']
    password = post_object['password']
    user = authenticate(username=username, password=password)
    if user is not None:
        if user.is_active:
            login(request, user)
            return JsonResponse({'status': 'success', 'message': 'You are logged in.'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Your account is inactive.'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Wrong user name of password.'})

def logout_user(request):
    '''
    logout function
    '''
    logout(request)
    return JsonResponse({'success': True})

def get_page_info(request):
    '''
    return information: if user is logged in,
    '''
    page_info = {
        "user-name": request.user.username,
        "user-logged": request.user.is_authenticated()
    }

    return JsonResponse(page_info)