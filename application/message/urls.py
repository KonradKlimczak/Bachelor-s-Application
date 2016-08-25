from django.conf.urls import url

from message.api import get_messages
from message.api import send_message

urlpatterns = [
    url(r'^api/chat/get-messages$', get_messages),
    url(r'^api/chat/send-message$', send_message),
]