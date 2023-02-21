from django.urls import path, include
from django.contrib import admin
from myapp.views import UserMethods, MessageList, MessageDetails
from rest_framework.authtoken import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', UserMethods.as_view(), name="users"),
    path('wall/', MessageList.as_view(), name="messages-list"),
    path('wall/<int:pk>/', MessageDetails.as_view()),
    path('api-token-auth/', views.obtain_auth_token, name="api-token-auth")
]