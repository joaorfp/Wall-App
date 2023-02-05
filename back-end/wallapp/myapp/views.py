from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import UsersSerializer
from django.db import IntegrityError
from rest_framework.permissions import AllowAny
from django.http.response import JsonResponse
from django.core.mail import send_mail

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
                [request.data['email']],
                fail_silently=False,
            )
        except:
            print('Error on sending the email to the new user')

        return JsonResponse({'User created': f'User {username} created'}, status=201)

