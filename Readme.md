#to-do
Before getting into these steps make sure that you have virtual environment wrapper installed(command pip install virtualenvwrapper)

#step 1:cd api
#step 2:virtualenv virtualenv_name
#step 3:Scripts/activate
#step 4:pip install django djangorestframework
#step 5:In the API/api/settings.py in the DATABASE dictonary for the key PASSWORD enter the password the one which you created while installing postgres
#step 6:pip install psycopg2
#step 7:python manage.py migrate
Once the migration is sucessful create super user which is step 8
#step 8: python manage.py createsuperuser
