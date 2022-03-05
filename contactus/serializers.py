from .models import *
from rest_framework import serializers

class ContactusSerializer(serializers.ModelSerializer):
    class Meta:
        model=Contact
        fields = "__all__"