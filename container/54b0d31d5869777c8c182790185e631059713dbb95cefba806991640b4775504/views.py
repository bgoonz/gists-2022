def webhook(request):
    payload = get_and_verify_payload(request)
    SubPlatEvents.objects.create(payload=payload)  # set up Django Admin for this ORM model
    with transaction.atomic():
       if payload.get('foo'):
          do_foo()
       elif payload.get('foo'):
          do_bar()
       buzz_save()
      
   return HttpResponse(status=202)