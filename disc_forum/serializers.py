from rest_framework.serializers import ModelSerializer
from .models import *
from rest_framework import serializers
 
class ForumSerializer(ModelSerializer):
    class Meta:
        model= Forum
        fields = "__all__"
 
class DiscussionSerializer(ModelSerializer):
    class Meta:
        model= Discussion
        fields = "__all__"

