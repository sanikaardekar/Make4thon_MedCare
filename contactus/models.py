from django.db import models

# Create your models here.
class Contact(models.Model):
    first_name=models.CharField(max_length=255)
    last_name=models.CharField(max_length=255)
    email_id=models.EmailField(max_length=255)
    issue=models.TextField()
    def __str__(self):
        return self.email_id