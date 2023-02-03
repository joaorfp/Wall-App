from django.urls import path

from myapp.views import UserMethods

urlpatterns = [
    path('', UserMethods.as_view(), name="users-list"),
]