# Generated by Django 4.2.1 on 2023-05-11 18:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('media', '0012_alter_media_media'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='article',
            options={'ordering': ['published_date']},
        ),
    ]
