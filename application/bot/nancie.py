import thread
import time
from django.contrib.auth.models import User

from message.models import ChatMessage
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

NANCIE = ChatBot('Nancie')
NANCIE.set_trainer(ChatterBotCorpusTrainer)
NANCIE.train("chatterbot.corpus.english")


def talk(user, message):
    thread.start_new_thread(ara_response, (user, message))


def ara_response(user, message):
    '''
    Response user with exactly same message.
    '''
    time.sleep(6)
    try:
        response = NANCIE.get_response(message)
        ChatMessage.objects.create(
            sender=User.objects.get(username='Nancie'),
            receiver=user,
            message=response.text,
            is_read=True
        )
    except Exception as err:
        print err