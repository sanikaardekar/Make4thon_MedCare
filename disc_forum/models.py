from django.db import models
# Create your models here.
from django.db import models 
from login_signup.models import *
#parent model
class Forum(models.Model):
    name=models.CharField(max_length=200,default="anonymous")
    email=models.CharField(max_length=200,null=True)
    topic= models.CharField(max_length=300)
    description = models.CharField(max_length=1000,blank=True)
    link = models.CharField(max_length=100 ,null =True)
    date_created=models.DateTimeField(auto_now_add=True,null=True)
    
    def __str__(self):
        return str(self.topic)
 
#child model
class Discussion(models.Model):
    forum = models.ForeignKey(Forum,blank=True,on_delete=models.CASCADE)
    discuss = models.CharField(max_length=1000)
 
    def __str__(self):
        return str(self.forum)

####Final post model
class Post(models.Model):
    posted_by=models.ForeignKey(MyUser,on_delete=models.CASCADE)
    description=models.TextField()
