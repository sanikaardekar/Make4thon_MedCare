from .views import *
from django.urls import path
urlpatterns = [
    path('',ContactUsView.as_view(),name='contact-us')
]
