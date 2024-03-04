CREATE TABLE public.pokemon (
	id int4 NOT NULL,
	pokedex_id int4 NOT NULL,
	"name" varchar NOT NULL,
	type1 varchar NOT NULL,
	type2 varchar NULL,
	hp int4 NOT NULL,
	attack int4 NOT NULL,
	defense int4 NOT NULL,
	speed int4 NOT NULL,
	sp_attack int4 NOT NULL,
	sp_defense int4 NOT NULL,
	generation int4 NOT NULL,
	CONSTRAINT pokemon_pk PRIMARY KEY (id)
);