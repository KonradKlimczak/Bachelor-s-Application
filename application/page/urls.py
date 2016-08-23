from django.conf.urls import url

from page.views import frontend_application
from page.api import register_user
from page.api import login_user
from page.api import logout_user
from page.api import get_page_info

urlpatterns = [
    url(r'^(?!api).*', frontend_application),
    url(r'^api/create-user$', register_user),
    url(r'^api/log-in$', login_user),
    url(r'^api/log-out$', logout_user),
    url(r'^api/page-info$', get_page_info),
]