from django.contrib import admin

# Register your models here.

from expense.models import UserDetail, Expense  # file in models.py waale me

admin.site.register(UserDetail)
admin.site.register(Expense)