
import json
from lesson.models import Test
from lesson.models import Question
from lesson.models import Score

from django.http import JsonResponse
from django.http import HttpResponse
from django.core import serializers
from django.forms.models import model_to_dict


def get_all_lessons(_request):
    '''
    Returns lessons available
    '''

    tests = Test.object.all()
    
    messagesJson = serializers.serialize('json', tests, use_natural_foreign_keys=True)
    return HttpResponse(messagesJson, content_type="application/json")

from django.db.models.fields.related import ManyToManyField

def to_dict(instance):
    opts = instance._meta
    data = {}
    for f in opts.concrete_fields + opts.many_to_many:
        if isinstance(f, ManyToManyField):
            if instance.pk is None:
                data[f.name] = []
            else:
                data[f.name] = list(f.value_from_object(instance).values_list('pk', flat=True))
        else:
            data[f.name] = f.value_from_object(instance)
    return data


def get_lesson(request):
    post_object = json.loads(request.body)
    test = Test.objects.get(id=post_object['id'])
    test_dict = test.to_dict()
    test_dict['questions'] = []
    questions = test.questions.all()
    for q in questions:
        test_dict['questions'].append(q.to_dict())

    return JsonResponse(test_dict)


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
        title=post_object['name'],
        description=post_object['description'],
        creator=request.user,
        category=post_object['category']
    )

    for question in post_object['questions']:
        answer_list = '' if not 'answer_list' in post_object else ':'.join(post_object['answer_list'])
        question_object = Question.objects.create(
            name=question['name'],
            source=question['source'],
            answer=question['answer'],
            category=question['type'],
            answer_list=answer_list
        )
        new_test.questions.add(question_object)

    return JsonResponse({'status': 'success', 'message': 'New test created successfully. Thank you for contribution.'})

def submit_lesson(request):
    post_object = json.loads(request.body)
    user_score = Score.objects.get(owner=request.user)
    user_score.tests_taken = user_score.tests_taken + 1
    user_score.tests_passed = user_score.tests_passed + post_object['']
    test = Test.objects.get(id=post_object['testId'])
    user_score.recent_test = test
    user_score.save()

    return JsonResponse({'status': 'success', 'message': 'Good job'})
