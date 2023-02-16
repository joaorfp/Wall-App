from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Message
from .validations import *

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'is_superuser', 'is_active', 'email']

class MessageSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Message
        fields = ['id', 'title', 'posted_message', 'owner']