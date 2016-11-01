import thread
import time
from django.contrib.auth.models import User

from message.models import ChatMessage
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer


NANCIE = ChatBot('Nancie')

NANCIE.set_trainer(ListTrainer)


def talk(user, message):
    thread.start_new_thread(ara_response, (user, message))


def ara_response(user, message):
    '''
    Response user with exactly same message.
    '''
    time.sleep(1)
    try:
        response = NANCIE.get_response(message)
        ChatMessage.objects.create(
            sender=User.objects.get(username='Nancie'),
            receiver=user,
            message=response.text,
            is_read=True
        )
        export_converstation()
    except Exception as err:
        print err

def export_converstation():
    NANCIE.trainer.export_for_training('./export.json')
