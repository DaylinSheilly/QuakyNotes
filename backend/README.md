# Setting up the virtual enviroment

```
python3.10 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
<br>
exit virtual enviroment
```
deactivate
```
<br>

# Create data base

Creating the DB
```
$ sudo -u postgres psql
```
```
postgres=# CREATE DATABASE quakynotes_db;
postgres=# CREATE USER quaky_root WITH PASSWORD 'quakyNotes';
```
```
postgres=# ALTER ROLE quaky_root SET client_encoding TO 'utf8';
postgres=# ALTER ROLE quaky_root SET default_transaction_isolation TO 'read committed';
postgres=# ALTER ROLE quaky_root SET timezone TO 'UTC';
```
```
postgres=# GRANT ALL PRIVILEGES ON DATABASE quakynotes_db TO quaky_root;
```
```
postgres=# \q
```

<br>

Making the migrations
```
(venv)$ python manage.py makemigrations
(venv)$ python manage.py migrate
```
After this you should see the default tables that django creates 

<br>