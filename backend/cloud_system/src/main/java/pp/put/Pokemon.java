package pp.put;
 

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
 
@Entity
@Table(name = "pokemon")
@Getter
@Setter
public class Pokemon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
 
    private Integer pokedex_id;
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