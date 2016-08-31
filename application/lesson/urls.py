from django.conf.urls import url

from lesson.api import get_all_lessons

urlpatterns = [
    url(r'^api/lesson/get-all$', get_all_lessons),
]