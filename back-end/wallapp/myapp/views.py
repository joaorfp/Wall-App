from rest_framework import generics
from .models import Users
from .serializers import UsersSerializer

class CreateUserView(generics.CreateAPIView):
  queryset = Users.objects.all()
  serializer_class = UsersSerializer

class GetUsersView(generics.ListAPIView):
  queryset = Users.objects.all()
  serializer_class = UsersSerializer

class UpdateUserView(generics.UpdateAPIView):
  queryset = Users.objects.all()
  serializer_class = UsersSerializer

class DeleteUserView(generics.DestroyAPIView):
  queryset = Users.objects.all()
  serializer_class = UsersSerializer
# Create your views here.
