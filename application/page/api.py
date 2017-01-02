'''
Django views returning json response
'''

import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.db import IntegrityError
from django.db import OperationalError
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib.auth import logout

from lesson.score import get_user_score
from lesson.score import count_lessons_created_by_user

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
        return JsonResponse({
            'status': 'success',
            'message': 'User account was created successfully.'
        })
    except IntegrityError:
        return JsonResponse({'status': 'error', 'message': 'This user name is already taken.'})
    except OperationalError:
        return JsonResponse({'status': 'error', 'message': 'Database Error. Table user is missing.'})

def login_user(request):
    '''
    login functionality
    '''
    post_object = json.loads(request.body)
    username = post_object['user-name']
    password = post_object['password']
    user = None
    try:
        user = authenticate(username=username, password=password)
    except OperationalError:
        return JsonResponse({'status': 'error', 'message': 'Database Error. Table user is missing.'})

    if user:
        if user.is_active:
            login(request, user)
            return JsonResponse({'status': 'success', 'message': 'You are logged in.'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Your account is inactive.'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Wrong user name of password.'})


@require_http_methods(["POST"])
def logout_user(request):
    '''
    logout function
    '''
    logout(request)
    return JsonResponse({'status': 'success', 'message': 'You are successfully logged out.'})

def get_page_info(request):
    '''
    return information: if user is logged in,
    '''
    page_info = {
        "user-name": request.user.username,
        "user-logged": request.user.is_authenticated(),
        "score": get_user_score(request.user),
        "test-created": count_lessons_created_by_user(request.user)
    }

    return JsonResponse(page_info)
