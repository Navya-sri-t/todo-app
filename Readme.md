# to-do


Before getting into these steps make sure that you have virtual environment wrapper installed(command pip install virtualenvwrapper)

# Change the current directory to api folder : cd api
# Create a virtual environment: virtualenv virtualenv_name
# Activate virtual env:Scripts/activate
# Install django REST framework:pip install django djangorestframework
# Integrating django and postgradesql:In the API/api/settings.py in the DATABASE dictonary for the key PASSWORD enter the password the one which you created while installing postgres
# pip install psycopg2
# python manage.py migrate

Once the migration is sucessful create super user which is step 8

# step 8: python manage.py createsuperuser
