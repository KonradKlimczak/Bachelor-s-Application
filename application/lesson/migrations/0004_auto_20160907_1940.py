# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-09-07 17:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lesson', '0003_question_answer_list'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='question',
            name='test',
        ),
        migrations.AddField(
            model_name='test',
            name='questions',
            field=models.ManyToManyField(to='lesson.Question'),
        ),
    ]
