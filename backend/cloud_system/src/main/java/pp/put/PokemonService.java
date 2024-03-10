package pp.put;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PokemonService {

    @Autowired
    private PokemonRepository pokemonRepository;

    public List<Pokemon> findAll() {
        return pokemonRepository.findAll();
    }

    public Optional<Pokemon> findById(Integer id){
        return pokemonRepository.findById(id);
    }

    public List<Pokemon> findByPokedexId(Integer id){
        return pokemonRepository.findByPokedexId(id);
    }

    public Pokemon save(Pokemon pokemon){
        return pokemonRepository.save(pokemon);
    }
}
