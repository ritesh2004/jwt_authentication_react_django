from django.contrib import admin
from django.urls import path
from . import views
from .views import MyTokenObtainPairView
from .views import RegisterAPI

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/register/', RegisterAPI.as_view(), name='register'),
]