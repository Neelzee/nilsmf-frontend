# Generated by Django 4.2.1 on 2023-05-10 20:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('media', '0010_alter_media_media'),
    ]

    operations = [
        migrations.AlterField(
            model_name='media',
            name='media',
            field=models.FileField(upload_to='files/'),
        ),
    ]