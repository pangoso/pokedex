package pp.put;
 
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PokemonRepository extends JpaRepository<Pokemon, Integer> {
    public List<Pokemon> findAll();
    public Optional<Pokemon> findById(Integer id);
    public List<Pokemon> findByPokedexId(Integer id);
}