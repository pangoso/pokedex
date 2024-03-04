import psycopg2
import csv

conn = psycopg2.connect(database="postgres",
                        host="localhost",
                        user="postgres",
                        password="pokemon",
                        port="5432")

with open('database/Pokemon.csv') as csv_file:
    cursor = conn.cursor()
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count: int = 0
    for row in csv_reader:
        if line_count != 0:
            cursor.execute("INSERT INTO pokemon (pokedex_id,name,type1,type2,hp,attack,defense,speed,sp_attack,sp_defense,generation,id"
                           ") VALUES (" + row[0] + ", '" + row[1] + "', '" + row[2] + "',' " +
                           row[3] + "', " + row[5] + ", " + row[6] + ", "
                           + row[7] + ", "+ row[10] + ", "+ row[8] + ", " + row[9] + ", " + row[11] + "," + str(line_count) +")")
            # #,Name,Type 1,Type 2,Total,HP,Attack,Defense,Sp. Atk,Sp. Def,Speed,Generation,Legendary
        line_count += 1
        conn.commit()
    print(f'Processed {line_count} lines.')
cursor.close()

