from django.conf.urls import url

from lesson.api import get_all_lessons
from lesson.api import get_lesson
from lesson.api import create_lesson

urlpatterns = [
    url(r'^api/lesson/get-all$', get_all_lessons),
    url(r'^api/lesson/get-lesson$', get_lesson),
    url(r'^api/lesson/create-lesson$', create_lesson),
]