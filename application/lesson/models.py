from __future__ import unicode_literals
from django.contrib.auth.models import User

from django.db import models

class Test(models.Model):
    '''
    Lesson model
    '''
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=30)
    description = models.TextField()
    creator = models.ForeignKey(User)
    category = models.CharField(max_length=10)

class Question(models.Model):
    '''
    Question model
    '''
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30, blank=True)
    source = models.TextField()
    answer = models.CharField(max_length=30)
    category = models.CharField(max_length=10)
    test = models.ForeignKey(Test, on_delete=models.CASCADE)


class Score(models.Model):
    '''
    User statistics about solving tests.
    '''
    tests_made = models.IntegerField()
    tests_passed = models.IntegerField()
    recent_test = models.ForeignKey(Test)
    owner = models.ForeignKey(User)

