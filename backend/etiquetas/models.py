from django.db import models

# Create your models here.

class Etiquetas(models.Model):
    nombre = models.CharField(max_length=100)