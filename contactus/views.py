from django.shortcuts import render
from rest_framework import generics
from .serializers import *
from contactus.models import *
from rest_framework.permissions import IsAuthenticated
# Create your views here.

class ContactUsView(generics.ListCreateAPIView):
    queryset=Contact.objects.all()
    serializer_class=ContactusSerializer
    permission_classes=[IsAuthenticated]