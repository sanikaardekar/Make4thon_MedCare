from django.urls import path
from .views import *
urlpatterns = [
    path('forum/',ForumView.as_view(),name='Forum'),
    path('discussion/',DiscussionView.as_view(),name='Discussion'),
]
