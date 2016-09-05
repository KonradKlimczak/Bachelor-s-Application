
import json
from lesson.models import Test
from lesson.models import Question
from lesson.models import Score

from django.http import JsonResponse
from django.http import HttpResponse
from django.core import serializers


def get_all_lessons(_request):
    '''
    Returns lessons available
    '''

    tests = Test.object.all()
    
    messagesJson = serializers.serialize('json', tests, use_natural_foreign_keys=True)
    return HttpResponse(messagesJson, content_type="application/json")


def get_lesson(request):
    post_object = json.loads(request.body)
    test = Test.objects.get(id=post_object['id'])
    questions = Question.objects.get(test=test)


def get_user_score(request):
    '''
    Returns user information about lesson, he participated.
    '''

    user_score = Score.object.get(owner=request.user)
    
    messagesJson = serializers.serialize('json', user_score, use_natural_foreign_keys=True)
    return HttpResponse(messagesJson, content_type="application/json")


def create_lesson(request):
    post_object = json.loads(request.body)
    new_test = Test.objects.create(
        title=post_object['title'],
        description=post_object['description'],
        creator=request.user,
        category=post_object['category']
    )

    for question in post_object['questions']:
        answer_list = '' if not 'answer_list' in questiion else ':'.join(question['answer_list'])
        Question.objects.create(
            name=question['name'],
            source=question['source'],
            answer=question['answer'],
            category=question['type'],
            answer_list=answer_list,
            test=new_test
        )

    return JsonResponse({'status': 'success', 'message': 'New test created successfully. Thank you for contribution.'})