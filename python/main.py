from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def index(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        car = Car.objects.create(
            model=data['model'],
            power=data['power'],
            price=data['price'],
            year=data['year']
        )
        return JsonResponse({'id': car.id, 'model': car.model}, status=201)
    return JsonResponse({'error': 'Invalid request'}, status=400)