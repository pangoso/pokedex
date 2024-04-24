import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../App.css';
import { HeadCell } from './HeadCell';
import { TypeTag } from './TypeTag';
import { getAll, getById, getTotal } from '../services';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { Input, FormControl, Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SearchIcon from '@mui/icons-material/Search';

export const PokeTable = () => {
  const navigate = useNavigate();
  // const pokedata = [
  //   {
  //     id: "0001",
  //     name: "Bulbasaur",
  //     type1: "grass",
  //     type2: "poison",
  //     hp: 45,
  //     attack: 49,
  //     defense: 49,
  //     specialAttack: 65,
  //     specialDefense: 65,
  //     speed: 45
  //   }
  // ]
  const [serverPokedata, setServerPokedata] = React.useState([])
  const [reloadPage, setReloadPage] = React.useState(false)
  const [search, setSearch] = React.useState('')
  const [open, setOpen] = React.useState(false);
  const [clickedId, setClickedId] = React.useState('')
  const [clickedName, setClickedName] = React.useState('')
  const [clickedTotal, setClickedTotal] = React.useState(0)
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const newPokemons = await getAll();
      setServerPokedata(newPokemons)
    }
  
    fetchData().catch(console.error);
  }, [])

  React.useEffect(() => {
    setReloadPage(!reloadPage)
  }, [serverPokedata])

  async function handleSearch() {
    const newPokemons = await getById(+search);
    if (newPokemons) setServerPokedata(newPokemons)
  }

  async function handleTotal(id, name) {
    const total = await getTotal(id);
    setClickedName(name)
    if (total) setClickedTotal(total)
    setOpen(true)
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Total stats</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Check put these total stats for ${clickedName}!`}
          </DialogContentText>
          <div style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: 'green',
            textAlign: 'center'
          }}>
            {clickedTotal}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyItems: 'flex-start',
        alignItems: 'flex-start',
        width: '30%',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <FormControl fullWidth style={{
          display: 'flex',
          flexDirection: 'row',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 10,
          marginBottom: 20,
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center'
          }}>
            ID:
            <Input
              autoFocus={true}
              maxRows={1}
              multiline={false}
              name={"search"}
              type={"number"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                marginLeft: 10
              }}
            />
          </div>
        </FormControl>

        <Button
          variant="contained"
          fullWidth={false}
          style={{
            marginTop: 10,
            marginRight: 30,
          }}
          onClick={() => handleSearch()}
        >
          Search
        </Button>

        <Button
          variant="contained"
          fullWidth={false}
          style={{
            marginTop: 10
          }}
          onClick={() => navigate('/form')}
        >
          New
        </Button>
      </div>

      <div style={{
        width: '97%',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{
                background: "#EBEBE5",
                borderColor: '#DBDBDB',
                borderWidth: '5px'
              }}>
                <TableCell align="left" variant='head'>
                  <HeadCell text={'#'}/>
                </TableCell>
                <TableCell align="left" variant='head'>
                  <HeadCell text={'Name'}/>
                </TableCell>
                <TableCell align="left" variant='head'>
                  <HeadCell text={'Type'}/>
                </TableCell>
                <TableCell align="left" variant='head'>
                  <HeadCell text={'HP'}/>
                </TableCell>
                <TableCell align="left" variant='head'>
                  <HeadCell text={'Attack'}/>
                </TableCell>
                <TableCell align="left" variant='head'>
                  <HeadCell text={'Defense'}/>
                </TableCell>
                <TableCell align="left" variant='head'>
                  <HeadCell text={'Special Attack'}/>
                </TableCell>
                <TableCell align="left" variant='head'>
                  <HeadCell text={'Special Defense'}/>
                </TableCell>
                <TableCell align="left" variant='head'>
                  <HeadCell text={'Speed'}/>
                </TableCell>
                <TableCell align="left" variant='head'>
                  <HeadCell text={'Total'}/>
                </TableCell>
                <TableCell align="left" variant='head'>
                  <HeadCell text={'Edit'}/>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                serverPokedata.length > 0 ?
                serverPokedata.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="left">
                      <div style={{
                        fontWeight: 'bolder',
                        color: '#3366ff'
                      }}>
                        {row.name}
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <TypeTag text={row.type1}/>
                      {row.type2 !== "" ? <TypeTag text={row.type2}/> : null}
                    </TableCell>
                    <TableCell align="left">{row.hp}</TableCell>
                    <TableCell align="left">{row.attack}</TableCell>
                    <TableCell align="left">{row.defense}</TableCell>
                    <TableCell align="left">{row.specialAttack}</TableCell>
                    <TableCell align="left">{row.specialDefense}</TableCell>
                    <TableCell align="left">{row.speed}</TableCell>
                    <TableCell align="left">
                      <SearchIcon
                        color='black'
                        onClick={() => handleTotal(row.id, row.name)}
                      />
                    </TableCell>
                    <TableCell align="left">
                      <EditIcon
                        color='black'
                        onClick={() => navigate('/form', {state: {
                          id: row.id,
                          name: row.name,
                          type1: row.type1,
                          type2: row.type2,
                          hp: row.hp,
                          attack: row.attack,
                          defense: row.defense,
                          specialAttack: row.specialAttack,
                          specialDefense: row.specialDefense,
                          speed: row.speed
                        }})
                    }
                    />
                  </TableCell>
                </TableRow>)) : null
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}