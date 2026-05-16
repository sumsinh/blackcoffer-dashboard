from django.urls import path
from .views import get_all_insights, get_filter_options


urlpatterns = [
    path("insights/", get_all_insights),
    path("filters/", get_filter_options),
]