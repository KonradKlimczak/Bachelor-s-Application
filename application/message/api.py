import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.contrib.auth.models import User
from django.contrib.sessions.models import Session

from message.models import ChatMessage

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
            session=Session.objects.get(session_key=request.session.session_key)
        )
        return JsonResponse({'status': 'success', 'message': None})
    except Exception as err:
        return JsonResponse({'status': 'error', 'message': 'Message was not sent. ' + err})
