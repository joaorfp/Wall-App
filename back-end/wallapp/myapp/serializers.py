from rest_framework import serializers
from django.contrib.auth.models import User
from .validations import *

class UsersSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['username', 'email', 'is_superuser', 'is_active']
  def validate(self, data):
    if not valid_email(data['email']):
      raise serializers.ValidationError({'email': "Invalid Email Format"})
    if not valid_name(data['username']):
      raise serializers.ValidationError({'username': "Username must be bigger that 6 characters"})
    return data