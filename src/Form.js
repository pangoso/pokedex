import { Input, TextField, Button, Select, Autocomplete } from "@mui/material";
// import { TypeTag } from './components/TypeTag';

export const Form = (props) =>  {
  
  
  const op = ['grass', 'poison', 'fire', 'flying', 'dragon', 'water', 'bug', 'normal', 'dark', 'electric', 'psychic', 'ground', 'steel', 'ice', 'fairy', 'fighting', 'rock', 'ghost']
  return (
    <form
      className="Form"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        gridColumnGap: "20px",
        gridRowGap: "20px",
        width: '40%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <h1 style={{ alignSelf: "center", gridArea: "1 / 1 / 2 / 4" }}>Add Pokémon</h1>
      <div style={{ gridArea: "2 / 1 / 3 / 4" }}>
        Name:{" "}
        <Input
          autoFocus={true}
          maxRows={1}
          multiline={false}
          name={"name"}
          type={"text"}
          defaultValue={props.pokemon.name}
          style={{
            marginLeft: 10,
          }}
        />
      </div>
      <div style={{ gridArea: "3 / 1 / 4 / 4" }}>
        <Autocomplete
          multiple
          options={op}
          limitTags={3}
          defaultValue={props.pokemon.type}
          getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Type"
              placeholder="Type"
            />
          )}
        ></Autocomplete>
      </div>
      <div style={{ gridArea: "4 / 1 / 5 / 2" }}>
      <p>HP:</p>
        <Input
          autoFocus={true}
          maxRows={1}
          multiline={false}
          name={"hp"}
          type={"number"}
          defaultValue={props.pokemon.hp}
          style={{
            marginLeft: 10,
          }}
        />
      </div>
      <div style={{ gridArea: "4 / 2 / 5 / 3" }}>
      <p>Attack:</p>
        <Input
          autoFocus={true}
          maxRows={1}
          multiline={false}
          name={"attack"}
          type={"number"}
          defaultValue={props.pokemon.attack}
          style={{
            marginLeft: 10,
          }}
        />
      </div>
      <div style={{ gridArea: "4 / 3 / 5 / 4" }}>
      <p>Defense:</p>
        <Input
          autoFocus={true}
          maxRows={1}
          multiline={false}
          name={"defense"}
          type={"number"}
          defaultValue={props.pokemon.defense}
          style={{
            marginLeft: 10,
          }}
        />
      </div>
      <div style={{ gridArea: "5 / 1 / 6 / 2" }}>
      <p>Special Attack:</p>
        <Input
          autoFocus={true}
          maxRows={1}
          multiline={false}
          name={"special attack"}
          type={"number"}
          value={props.pokemon.specialAttack}
          style={{
            marginLeft: 10,
          }}
        />
      </div>
      <div style={{ gridArea: "5 / 2 / 6 / 3" }}>
        <p>Special Defense:</p>
        <Input
          autoFocus={true}
          maxRows={1}
          multiline={false}
          name={"special Defense"}
          type={"number"}
          defaultValue={props.pokemon.specialDefense}
          style={{
            marginLeft: 10,
            width: 'auto',
          }}
        />
      </div>
      <div style={{ gridArea: "5 / 3 / 6 / 4" }}>
      <p>Speed:</p>
        <Input
          autoFocus={true}
          maxRows={1}
          multiline={false}
          name={"speed"}
          type={"number"}
          defaultValue={props.pokemon.speed}
          style={{
            marginLeft: 10,
          }}
        />
      </div>

      <Button
        variant="contained"
        fullWidth={false}
        style={{
          alignSelf: "center",
          gridArea: "6 / 1 / 7 / 4",
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        Add
      </Button>
    </form>
  );
}
export default Form;
