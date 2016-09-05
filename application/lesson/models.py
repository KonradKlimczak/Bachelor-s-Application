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
    answer_list = models.CharField(max_length=150, blank=True)


class Score(models.Model):
    '''
    User statistics about solving tests.
    '''
    tests_taken = models.IntegerField(default=0)
    tests_passed = models.IntegerField(default=0)
    recent_test = models.ForeignKey(Test, blank=True, null=True)
    owner = models.ForeignKey(User)

