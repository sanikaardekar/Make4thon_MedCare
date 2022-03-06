from django.db import models
from login_signup.models import *
# Create your models here.
class Contact(models.Model):
    user=models.ForeignKey(MyUser,on_delete=models.CASCADE)
    feedback=models.TextField()
    stars=models.IntegerField(default=3)
    def __str__(self):
        return self.email_id