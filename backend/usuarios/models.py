from django.db import models

# Create your models here.

class Usuarios(models.Model):
    nombre = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    celular = models.CharField(max_length=10)
    email = models.EmailField(unique=True)
    fecha_registro = models.DateTimeField()