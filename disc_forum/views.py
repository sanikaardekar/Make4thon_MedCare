from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *
from rest_framework.permissions import IsAuthenticated
# Create your views here.
class DiscussionView(generics.ListCreateAPIView):
    queryset=Discussion.objects.all()
    serializer_class=DiscussionSerializer

class ForumView(generics.ListCreateAPIView):
    queryset=Forum.objects.all()
    serializer_class=ForumSerializer

class PostView(generics.ListCreateAPIView):
    queryset=Post.objects.all()
    serializer_class=PostSerializer
    
