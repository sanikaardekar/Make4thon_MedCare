from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

# Create your models here.
class MyUser(AbstractUser):
    user_id   = models.AutoField(primary_key=True)
    username  = models.CharField(max_length = 100,unique=True, blank = False)
    email     = models.EmailField(max_length=100,unique=True)
    is_seller = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['username']
    
    def __str__(self):
        return self.email

@receiver(post_save, sender = settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance = None, created = False, **kwargs):
    if created:
        token=Token.objects.create(user = instance)