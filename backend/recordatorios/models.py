from django.db import models
from notas.models import Notas

# Create your models here.

class Recordatorios (models.Model):
    id_notas = models.ForeignKey(Notas, on_delete=models.DO_NOTHING, blank=True, null=True)
    titulo = models.TextField(max_length=50)
    fecha_inicio = models.DateTimeField()
    fecha_finalizacion = models.DateTimeField()
    fecha_creacion = models.DateTimeField()
    estado = models.TextField(max_length=50)