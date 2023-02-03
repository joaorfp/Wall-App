from django.db import models

class Users(models.Model):
  name = models.CharField(max_length=20)
  email = models.EmailField(blank=False, max_length=50)
  password = models.CharField(max_length=20)
  # role = models.CharField(max_length=20)


# Create your models here.
