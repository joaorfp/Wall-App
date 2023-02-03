from django.contrib import admin
from django.urls import path, include
from myapp.views import CreateUserView, GetUsersView, UpdateUserView, DeleteUserView, RegisterViewSet, LoginViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('', RegisterViewSet, basename='Users')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', LoginViewSet.as_view(), name="login"),
    path('register/', include(router.urls)),
]
