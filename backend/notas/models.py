from django.db import models
from usuarios.models import Usuarios
from etiquetas.models import Etiquetas
# Create your models here.

class Notas(models.Model):
    id_usuario = models.ForeignKey(Usuarios, on_delete=models.DO_NOTHING, blank=True, null=True)
    id_etiqueta = models.ForeignKey(Etiquetas, on_delete=models.DO_NOTHING, blank=True, null=True)
    titulo = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=100)
    fecha_creacion = models.DateTimeField()
    archivo = models.BooleanField()