package pp.put;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/pokemon")
public class PokemonController {

    @Autowired
    private PokemonService pokemonService;

    @RequestMapping(method=RequestMethod.GET)
    public List<Pokemon> findAll() {
        return pokemonService.findAll();
    }


    @GetMapping("/{id}")
    public Optional<Pokemon> findById(@PathVariable Integer id){
        return pokemonService.findById(id);
    }
}
