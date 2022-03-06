from django.contrib import admin
from disc_forum.models import Discussion, Forum, Post

# Register your models here.
admin.site.register(Discussion)
admin.site.register(Forum)
admin.site.register(Post)