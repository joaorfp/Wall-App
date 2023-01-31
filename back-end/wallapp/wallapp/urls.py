from django.contrib import admin
from django.urls import path
from myapp.views import CreateUserView, GetUsersView, UpdateUserView, DeleteUserView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', CreateUserView.as_view(), name='create'),
    path('login/', GetUsersView.as_view(), name='login')
]
