from django.urls import path, include
from rest_framework.routers import DefaultRouter
#from .views import ProductViewSet, CategoryViewSet
from .views.cbv import ProductListAPIView, ProductDetailAPIView
from .views.mixins import ProductListAPIView, ProductDetailAPIView
from .views.generics import ProductListAPIView, ProductDetailAPIView, CategoryListAPIView, CategoryDetailAPIView, CategoryProductsAPIView


router = DefaultRouter()
#router.register(r'products', ProductViewSet)
#router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:pk>/', ProductDetailAPIView.as_view()),
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view())
]