import './App.css';
import { Input, FormControl, MenuItem, Select } from '@mui/material';
import { PokeTable } from './components/PokeTable';

function App() {
  return (
    <div className="App">
      <h1>Complete Pokémon Pokédex</h1>

      <FormControl fullWidth style={{
        display: 'flex',
        flexDirection: 'row',
        width: '40%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        marginBottom: 20,
        alignContent: 'space-between',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center'
        }}>
          Name:
          <Input
            autoFocus={true}
            maxRows={1}
            multiline={false}
            name={"name"}
            type={"text"}
            // value={any}
            style={{
              marginLeft: 10
            }}
          />
        </div>

        <div style={{
          marginLeft: "10%",
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
        }}>
          Type:
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            // onChange={handleChange}
            style={{
              marginLeft: 10,
              width: '150px',
              height: '40px'
            }}
           >
             <MenuItem value={10}>Ten</MenuItem>
             <MenuItem value={20}>Twenty</MenuItem>
             <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
      </FormControl>

      <div style={{
        width: '97%',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <PokeTable/>
      </div>
    </div>
  );
}

export default App;
