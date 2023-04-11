# Setting up the virtual enviroment

Install python3.10 venv

```
apt install python3.10-venv
```

Create the virtual enviroment

```
cd backend
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
CREATE DATABASE quakynotes_db;
CREATE USER quaky_root WITH PASSWORD 'quakyNotes';
```
```
ALTER ROLE quaky_root SET client_encoding TO 'utf8';
ALTER ROLE quaky_root SET default_transaction_isolation TO 'read committed';
ALTER ROLE quaky_root SET timezone TO 'UTC';
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