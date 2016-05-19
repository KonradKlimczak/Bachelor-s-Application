from django.conf.urls import url

from page.views import frontend_application

urlpatterns = [
    url(r'^.*$', frontend_application),
]