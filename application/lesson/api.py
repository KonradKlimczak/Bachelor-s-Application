from lesson.models import Test
from lesson.models import Score
from django.http import HttpResponse
from django.core import serializers


def get_all_lessons(_request):
    '''
    Returns lessons available
    '''

    tests = Test.object.all()
    
    messagesJson = serializers.serialize('json', tests, use_natural_foreign_keys=True)
    return HttpResponse(messagesJson, content_type="application/json")


def get_user_score(request):
    '''
    Returns user information about lesson, he participated.
    '''

    user_score = Score.object.get(owner=request.user)
    
    messagesJson = serializers.serialize('json', user_score, use_natural_foreign_keys=True)
    return HttpResponse(messagesJson, content_type="application/json")

