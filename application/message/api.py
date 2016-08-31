import json
from django.http import JsonResponse
from django.http import HttpResponse
from django.views.decorators.http import require_http_methods
from django.contrib.auth.models import User
from django.contrib.sessions.models import Session
from django.core import serializers

from message.models import ChatMessage
from bot.nancie import talk as talk_nancie

@require_http_methods(["POST"])
def send_message(request):
    '''
    function for sending new message
    '''
    post_object = json.loads(request.body)
    try:
        ChatMessage.objects.create(
            sender=request.user,
            receiver=User.objects.get(username=post_object['receiver']),
            message=post_object['message'],
            is_read=True
        )
        if post_object['receiver'] == 'Nancie':
            talk_nancie(request.user, post_object['message'])

        return JsonResponse({'status': 'success', 'message': post_object['message']})
    except Exception as err:
        return JsonResponse({'status': 'error', 'message': 'Message was not sent. ' + err.message})



@require_http_methods(["POST"])
def get_messages(request):
    '''
    function for sending new message
    '''
    post_object = json.loads(request.body)
    participants = post_object['participants']
    iterator = 0
    while iterator < len(participants):
        participant = participants.pop(0)
        participants.append(User.objects.get(username=participant))
        iterator += 1

    limit = None
    try:
        limit = post_object['limit']
    except KeyError:
        limit = 20
    try:
        messages = ChatMessage.objects.filter(
            sender__in=participants,
            receiver__in=participants
        ).order_by('sent_at')
        count = messages.count()
        if limit > count:
            limit = count
        limit = count - limit
        messagesJson = serializers.serialize('json', messages[limit:count], use_natural_foreign_keys=True)
        return HttpResponse(messagesJson, content_type="application/json")
    except Exception as err:
        return JsonResponse({'status': 'error', 'message': 'Message was not sent. ' + err.message})