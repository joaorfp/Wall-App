from rest_framework import generics, viewsets
from .models import Users
from .serializers import UsersSerializer

class RegisterViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

class LoginViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

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
