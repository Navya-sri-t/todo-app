from django.db import models
from django.db.models.fields import TimeField


class Article(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    completed = models.BooleanField(default=False)
    date = models.DateField()
