from rest_framework import serializers
from .models import Users
from .validations import *

class UsersSerializer(serializers.ModelSerializer):
  class Meta:
    model = Users
    fields = '__all__'
  def validate(self, data):
    if not valid_email(data['email']):
      raise serializers.ValidationError({'email': "Invalid Email Format"})
    if not valid_name(data['name']):
      raise serializers.ValidationError({'name': "Username must be bigger that 6 characters"})
    if not valid_password(data['password']):
      raise serializers.ValidationError({'email': "Password must be bigger that 6 characters"})