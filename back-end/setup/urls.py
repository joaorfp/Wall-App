from django.urls import path

from myapp.views import UserMethods, MessageList, MessageDetails

urlpatterns = [
    path('', UserMethods.as_view(), name="users-list"),
    path('wall/', MessageList.as_view(), name="messages-list"),
    path('wall/<int:pk>/', MessageDetails.as_view())
]