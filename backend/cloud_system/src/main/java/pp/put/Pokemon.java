package pp.put;
 

import org.springframework.beans.factory.annotation.Value;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
 
@Entity
@Table(name = "pokemon")
@Getter
@Setter
public class Pokemon {
    @Id
    private Integer id;
 
    @Value("pokedex_id")
    private Integer pokedexId;
    private String name;
    private String type1;
    private String type2;
    private Integer hp;
    private Integer attack;
    private Integer defense;
    private Integer speed;
    private Integer sp_attack;
    private Integer sp_defense;
    private Integer generation;
    
    public Pokemon(){
        
    }
}