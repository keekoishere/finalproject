# Generated by Django 2.1.2 on 2019-01-10 10:20

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('answer', models.CharField(max_length=500)),
                ('answer_date', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='Recommend',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('recdate', models.DateTimeField(default=django.utils.timezone.now)),
                ('spotid', models.CharField(max_length=50)),
                ('genurl', models.CharField(default='unlucky', max_length=8)),
                ('tipo', models.CharField(max_length=20)),
                ('msg', models.CharField(default='just play', max_length=500)),
                ('visto', models.BooleanField(default=False)),
                ('prova', models.BooleanField(default=False)),
                ('top', models.BooleanField(default=False)),
                ('liked', models.BooleanField(default=False)),
                ('answer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='ans', to='network.Answer')),
            ],
        ),
        migrations.CreateModel(
            name='Username',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(max_length=100)),
                ('country', models.CharField(max_length=2)),
                ('image', models.CharField(max_length=200)),
                ('URL', models.CharField(max_length=200)),
                ('followers', models.IntegerField()),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now)),
                ('email', models.CharField(max_length=50)),
                ('rtoken', models.CharField(max_length=200)),
                ('atoken', models.CharField(max_length=200)),
                ('texpiresat', models.IntegerField()),
                ('historyperm', models.BooleanField(default=False)),
            ],
        ),
        migrations.AddField(
            model_name='recommend',
            name='recdado',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='recdado', to='network.Username'),
        ),
        migrations.AddField(
            model_name='recommend',
            name='recmander',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='recmander', to='network.Username'),
        ),
    ]
