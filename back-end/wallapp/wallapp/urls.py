from django.contrib import admin
from django.urls import path
from myapp.views import CreateUserView, GetUsersView, UpdateUserView, DeleteUserView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', CreateUserView.as_view(), name='create'),
    path('register/', GetUsersView.as_view(), name='login'),
    path('', GetUsersView.as_view(), name='login')
]
