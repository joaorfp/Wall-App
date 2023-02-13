from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import UsersSerializer, MessageSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.db import IntegrityError
from rest_framework.permissions import AllowAny
from django.http.response import JsonResponse
from django.core.mail import send_mail
from .models import Message
from .permissions import IsOwnerOrReadOnly
from decouple import config

class UserMethods(generics.ListCreateAPIView):
    serializer_class = UsersSerializer
    queryset = User.objects.all()
    permission_classes = [AllowAny]

    def insertUser(self, request):
        username = request.data['username']
        email = request.data['email']
        password = request.data['password']
        
        try:
            User.objects.create_user(
                username,
                email,
                password,
            )
        except IntegrityError:
            return JsonResponse({'error'})

        sender = config('EMAIL_SENDER')

        try:
            send_mail(
                f'Welcome to Wall App, {username}.',
                f'Welcome to Wall App, {username}. Feel free to write your messages on the wall after logging in!',
                f'{sender}',
                [email],
                fail_silently=False,
            )
        except:
            print('Error on sending the email to the new user')

        return JsonResponse({'User created': f'User {username} created'}, status=201)


class MessageList(generics.ListCreateAPIView):
    serializer_class = MessageSerializer
    queryset = Message.objects.all().order_by('id')
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class MessageDetails(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = MessageSerializer
    queryset = Message.objects.all().order_by('id')
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]


