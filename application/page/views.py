from django.shortcuts import render

# Create your views here.

def frontend_application(request):
    return render(request, "index.html")
