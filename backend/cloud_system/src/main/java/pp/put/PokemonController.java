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
    public Pokemon create(@RequestBody Pokemon pokemon) {
        if (pokemonService.findById(pokemon.getId()).isPresent()){
			return new Pokemon();
        }
        else{
            return pokemonService.save(pokemon);
        }
    }

    // update a pokemon
    @PutMapping
    public Pokemon update(@RequestBody Pokemon pokemon) {
        return pokemonService.save(pokemon);
    }

    @GetMapping("/stats={id}")
    public Integer getStats(@PathVariable Integer id){
        Optional<Pokemon> pokemon = pokemonService.findById(id);
        return pokemon.get().getAttack() + pokemon.get().getDefense() + pokemon.get().getSpeed() +
        pokemon.get().getSp_defense() + pokemon.get().getSp_attack();
    }
}
