from __future__ import unicode_literals
from django.contrib.auth.models import User

from django.db import models

from django.db.models.fields.related import ManyToManyField

class PrintableModel(models.Model):
    def __repr__(self):
        return str(self.to_dict())

    def to_dict(self):
        opts = self._meta
        data = {}
        for field in opts.concrete_fields + opts.many_to_many:
            if isinstance(field, ManyToManyField):
                if self.pk is None:
                    data[field.name] = []
                else:
                    data[field.name] = list(field.value_from_object(self).values_list('pk', flat=True))
            else:
                data[field.name] = field.value_from_object(self)
        return data

    class Meta:
        abstract = True

class Question(PrintableModel):
    '''
    Question model
    '''
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30, blank=True)
    source = models.TextField()
    answer = models.CharField(max_length=30)
    category = models.CharField(max_length=10)
    # test = models.ForeignKey(Test, on_delete=models.CASCADE)
    answer_list = models.CharField(max_length=150, blank=True)

class Test(PrintableModel):
    '''
    Lesson model
    '''
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=30)
    description = models.TextField()
    creator = models.ForeignKey(User)
    category = models.CharField(max_length=10)
    questions = models.ManyToManyField(Question)

class Score(PrintableModel):
    '''
    User statistics about solving tests.
    '''
    tests_taken = models.IntegerField(default=0)
    tests_passed = models.IntegerField(default=0)
    recent_test = models.ForeignKey(Test, blank=True, null=True)
    owner = models.ForeignKey(User)

