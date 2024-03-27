package pp.put;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/pokemon")
public class PokemonController {

    @Autowired
    private PokemonService pokemonService;

    @GetMapping()
    public List<Pokemon> findAll() {
        return pokemonService.findAll();
    }

    @GetMapping("/id={id}")
    public Optional<Pokemon> findById(@PathVariable Integer id){
        return pokemonService.findById(id);
    }

    @GetMapping("/pokemon_id={id}")
    public List<Pokemon> findByPokedexId(@PathVariable Integer id){
        return pokemonService.findByPokedexId(id);
    }

    @ResponseStatus(HttpStatus.CREATED) // 201
    @PostMapping
    public boolean create(@RequestBody Pokemon pokemon) {
        var newID = pokemonService.findAll().size() + 1;
        pokemon.setId(newID);
        pokemonService.save(pokemon);
        return true;
    }

    // update a pokemon
    @PutMapping
    public boolean update(@RequestBody Pokemon pokemon) {
        Pokemon nPokemon = setValues(pokemon);
        pokemonService.save(nPokemon);
        return true;
    }

    @GetMapping("/stats={id}")
    public Integer getStats(@PathVariable Integer id){
        Optional<Pokemon> pokemon = pokemonService.findById(id);
        return pokemon.get().getAttack() + pokemon.get().getDefense() + pokemon.get().getSpeed() +
        pokemon.get().getSp_defense() + pokemon.get().getSp_attack();
    }

    private Pokemon setValues(Pokemon pokemon){
        Optional<Pokemon> oldPokemon = pokemonService.findById(pokemon.getId());
        Pokemon newPokemon = new Pokemon();
        if (oldPokemon.isPresent()){
            newPokemon = oldPokemon.get();
        };
        if (!pokemon.getAttack().equals(null)){
            newPokemon.setAttack(pokemon.getAttack());
        }
        if (!pokemon.getDefense().equals(null)){
            newPokemon.setDefense(pokemon.getDefense());
        }
        if (!pokemon.getHp().equals(null)){
            newPokemon.setHp(pokemon.getHp());
        }
        if (!pokemon.getSp_attack().equals(null)){
            newPokemon.setSp_attack(pokemon.getSp_attack());
        }
        if (!pokemon.getSp_defense().equals(null)){
            newPokemon.setSp_defense(pokemon.getSp_defense());
        }
        if (!pokemon.getSpeed().equals(null)){
            newPokemon.setSpeed(pokemon.getSpeed());
        }
        return newPokemon;
    }
}
