import thread
import time
from django.contrib.auth.models import User

from message.models import ChatMessage

def talk(user, message):
    thread.start_new_thread(ara_response, (user, message))


def ara_response(user, message):
    '''
    Response user with exactly same message.
    '''
    time.sleep(6)
    try:
        ChatMessage.objects.create(
            sender=User.objects.get(username='Nancie'),
            receiver=user,
            message=message,
            is_read=True
        )
    except Exception as err:
        print err