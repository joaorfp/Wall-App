from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import UsersSerializer
from django.db import IntegrityError
from django.http.response import JsonResponse

class UserMethods(generics.ListCreateAPIView):
    serializer_class = UsersSerializer
    queryset = User.objects.all()

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

