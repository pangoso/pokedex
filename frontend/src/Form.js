import { Input, TextField, Button, Select, Autocomplete, MenuItem } from "@mui/material";
// import { TypeTag } from './components/TypeTag';
import axios from "axios";
import { API_URL } from "./constants";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const Form = (props) =>  {
  const navigate = useNavigate();
  const { state } = useLocation();

  const op = ['grass', 'poison', 'fire', 'flying', 'dragon', 'water', 'bug', 'normal', 'dark', 'electric', 'psychic', 'ground', 'steel', 'ice', 'fairy', 'fighting', 'rock', 'ghost']
  const [attack, setAttack] = useState(0)
  const [defense, setDefense] = useState(0)
  const [hp, setHp] = useState(0)
  const [name, setName] = useState('')
  const [specialAttack, setSpecialAttack] = useState(0)
  const [specialDefense, setSpecialDefense] = useState(0)
  const [speed, setSpeed] = useState(0)
  const [type1, setType1] = useState('')
  const [type2, setType2] = useState('')

  useEffect(() => {
    if (state !== null) {
      setAttack(state.attack)
      setDefense(state.defense)
      setHp(state.hp)
      setName(state.name)
      setSpecialAttack(state.specialAttack)
      setSpecialDefense(state.specialDefense)
      setType1(state.type1)
      setType2(state.type2)
      setSpeed(state.speed)
    }
  }, [])

  async function handleAdd() {
    if (state === null) {
      const newPoki = {
        attack: attack,
        defense: defense,
        hp: hp,
        name: name,
        specialAttack: specialAttack,
        specialDefense: specialDefense,
        speed: speed,
        type1: type1,
        type2: (type2.length > 0 && type1 !== type2) ? type2 : '',
        generation: 10,
      }
      await axios.post(`${API_URL}`, newPoki).then((success) => true).catch((err) => false).then(() => navigate('/'))
    }
    else {
      const newPoki = {
        id: +state.id,
        pokedexId: +state.id,
        attack: attack,
        defense: defense,
        hp: hp,
        name: name,
        specialAttack: specialAttack,
        specialDefense: specialDefense,
        speed: speed,
        type1: type1,
        type2: (type2.length > 0 && type1 !== type2) ? type2 : '',
        generation: 10,
      }
      await axios.put(`${API_URL}`, newPoki).then((success) => true).catch((err) => false).then(() => navigate('/'))
    }
  }

  return (
    <div style={{
      width: '40%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '5%'
    }}>
      <div style={{
        marginBottom: 20,
        marginRight: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <Button
          variant="contained"
          fullWidth={false}
          onClick={() => navigate('/')}
        >
          Return
        </Button>
      </div>

      <form
        className="Form"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(5, 1fr)",
          gridColumnGap: "20px",
          gridRowGap: "20px",
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
            defaultValue={name}
            style={{
              marginLeft: 10,
            }}
            value={name}
            onChange={(data) => setName(data.target.value)}
          />
        </div>
        <div style={{
          gridArea: "3 / 1 / 4 / 4",
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Select
            labelId="demo-simple-select-label1"
            id="demo-simple-select2"
            value={type1}
            label="Type 1"
            onChange={(e) => setType1(e.target.value)}
            style={{
              width: '45%',
              height: 50,
            }}
          >
            {
              op.map((o) => (
                <MenuItem value={o}>{o}</MenuItem>
              ))
            }
          </Select>

          <Select
            labelId="demo-simple-select-label1"
            id="demo-simple-select2"
            value={type2}
            label="Type 2"
            onChange={(e) => setType2(e.target.value)}
            style={{
              width: '45%',
              height: 50
            }}
          >
            {
              op.map((o) => (
                <MenuItem value={o}>{o}</MenuItem>
              ))
            }
          </Select>
        </div>
        <div style={{ gridArea: "4 / 1 / 5 / 2" }}>
        <p>HP:</p>
          <Input
            autoFocus={true}
            maxRows={1}
            multiline={false}
            name={"hp"}
            type={"number"}
            defaultValue={hp}
            style={{
              marginLeft: 10,
            }}
            value={hp}
            onChange={(data) => setHp(+data.target.value)}
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
            defaultValue={attack}
            style={{
              marginLeft: 10,
            }}
            value={attack}
            onChange={(data) => setAttack(+data.target.value)}
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
            defaultValue={defense}
            style={{
              marginLeft: 10,
            }}
            value={defense}
            onChange={(data) => setDefense(+data.target.value)}
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
            defaultValue={specialAttack}
            style={{
              marginLeft: 10,
            }}
            value={specialAttack}
            onChange={(data) => setSpecialAttack(+data.target.value)}
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
            defaultValue={specialDefense}
            style={{
              marginLeft: 10,
              width: 'auto',
            }}
            value={specialDefense}
            onChange={(data) => setSpecialDefense(+data.target.value)}
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
            defaultValue={speed}
            style={{
              marginLeft: 10,
            }}
            value={speed}
            onChange={(data) => setSpeed(+data.target.value)}
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
          onClick={() => handleAdd()}
        >
          {state !== null ? 'Update' : "Add"}
        </Button>
      </form>
    </div>
  );
}
export default Form;
