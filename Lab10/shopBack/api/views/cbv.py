from rest_framework.response import Response
from rest_framework.views import APIView
from ..models import Product
from ..serializers import ProductSerializer


def get_object(product_id):
    try:
        product = Product.objects.get(pk=product_id)
    except Product.DoesNotExist:
        return Response(status=404)
    return product


class ProductListAPIView(APIView):
    def get(self, request):
        products = Product.objects.all()
        s = ProductSerializer(products, many=True)
        return Response(s.data)
    
    def post(self, request):
        s = ProductSerializer(data=request.data)
        if s.is_valid():
            s.save()
            return Response(s.data, status=201)


class ProductDetailAPIView(APIView):
    def get(self, req, pk):
        product = get_object(pk)
        s = ProductSerializer(product)
        return Response(s.data)
    
    def put(self, req, pk):
        product = get_object(pk)
        s = ProductSerializer(product, data=req.data)
        if s.is_valid(): s.save()
        return Response(s.data)
    
    def delete(self, req, pk):
        product = get_object(pk)
        product.delete()
        return Response(status=204)