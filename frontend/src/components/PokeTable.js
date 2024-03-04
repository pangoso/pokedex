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

export const PokeTable = () => {
  const pokedata = [
    {
      id: "0001",
      name: "Bulbasaur",
      type: ["grass", "poison"],
      total: 318,
      hp: 45,
      attack: 49,
      defense: 49,
      specialAttack: 65,
      specialDefense: 65,
      speed: 45
    }
  ]

  return (
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
              <HeadCell text={'Total'}/>
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
          </TableRow>
        </TableHead>
        <TableBody>
          {pokedata.map((row) => (
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
                {
                  row.type.map((t) => {
                    return (
                      <TypeTag text={t}/>
                    )
                  })
                }
              </TableCell>
              <TableCell align="left">
                <div style={{
                  fontWeight: 'bold'
                }}>
                  {row.total}
                </div>
              </TableCell>
              <TableCell align="left">{row.hp}</TableCell>
              <TableCell align="left">{row.attack}</TableCell>
              <TableCell align="left">{row.defense}</TableCell>
              <TableCell align="left">{row.specialAttack}</TableCell>
              <TableCell align="left">{row.specialDefense}</TableCell>
              <TableCell align="left">{row.speed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}