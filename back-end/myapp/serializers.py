from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Message
from .validations import *

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'is_superuser', 'is_active']

    def validate(self, data):
        if not valid_email(data['email']):
          raise serializers.ValidationError({'email': "Invalid Email Format"})
        if not valid_name(data['username']):
          raise serializers.ValidationError({'username': "Username must be bigger than 6 characters"})
        if not valid_password(data['password']):
          raise serializers.ValidationError({'password': "password must be bigger than 6 characters"})
        return data

class MessageSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Message
        fields = ['id', 'title', 'posted_message', 'owner']