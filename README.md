To properly run project:

* run dockerConfig.bat script
* build project (mvn clean install) in backend/cloud_system directory
* run **docker compose up -d** in main directory
* run **put_data_script.py** from database directory

Frontend of the application should be visible at address http://localhost:3000