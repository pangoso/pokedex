# Application start
To properly run project:

* run dockerConfig.bat script
* build project (mvn clean install) in backend/cloud_system directory
* run **docker compose up -d** in main directory
* run **put_data_script.py** from database directory

Frontend of the application should be visible at address http://localhost:3000

# Endpoints details

## GET all DONE

## GET /id={id}
Return pokemon with given ID (primary key) - always return one

## GET /pokemon_id={id}
Return pokemon(s) with given pokedex ID - if appears to be more than one, return list of them

## GET /stats={id}
Return sum of all stats of pokemon of given ID (primary key)

## POST DONE
Creates a new Pokemon with given parameters, added in body of request, for example:

{"pokedexId":2,
"name":"Ivysaur", 
"type1":"Grass",
"type2":"Poison",
"hp":405,
"attack":60,
"defense":63,
"sp_attack":63,
"sp_defense":80,
"speed":60,
"generation":1}

Throws error if some of not nullable values are not specified

## PUT DONE
Updates a Pokemon of given ID - if Pokemon of given ID does not exist, then creates it. Example body:

{"id":2,
"pokedexId":2,
"name":"Ivysaur", 
"type1":"Grass",
"type2":"Poison",
"hp":405,
"attack":60,
"defense":63,
"sp_attack":63,
"sp_defense":80,
"speed":60,
"generation":1}

ID has to be specified.