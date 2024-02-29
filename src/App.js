import './App.css';
import { Input, FormControl, MenuItem, Select } from '@mui/material';

function App() {
  return (
    <div className="App">
      <h1>Complete Pokémon Pokédex</h1>

      <FormControl fullWidth>
        <div>
          Name:
          <Input
            autoFocus={true}
            maxRows={1}
            multiline={false}
            name={"name"}
            type={"text"}
            // value={any}
          />
        </div>

        <div>
          Type:
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            // onChange={handleChange}
           >
             <MenuItem value={10}>Ten</MenuItem>
             <MenuItem value={20}>Twenty</MenuItem>
             <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
      </FormControl>
    </div>
  );
}

export default App;
