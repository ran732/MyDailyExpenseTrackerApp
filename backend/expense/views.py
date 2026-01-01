from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import*

#signup API 
@csrf_exempt
def signup(request):
    if request.method == 'POST':   # also use "delete" read="get"
        data = json.loads(request.body)     #json to dictionary[frontend to python]
        fullname = data.get('FullName')
        email = data.get('Email')
        password = data.get('Password')
        
        if UserDetail.objects.filter(Email=email).exists(): #filter=data read
            return JsonResponse({"message":"email already exist"},status=400)
        UserDetail.objects.create(FullName=fullname,Email=email,Password=password)
        return JsonResponse({"message":"User registered Successfully"},status=201)
        
        
