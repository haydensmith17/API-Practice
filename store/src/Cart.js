import DrawerAppBar from "./AppBar"
import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AuthContext } from './UserHttp';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';


function Cart() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { deleteCartBoard } = useContext(AuthContext)

  async function DeleteBoard(crap) {
    await deleteCartBoard(crap, user.email, user.password)
  }

  return (
    <>
      <div>
        <DrawerAppBar />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Item Name</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Size</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Manufacturer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.carts.map((row) => (
              <TableRow
                key={row.boardInfo.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.boardInfo.name}
                </TableCell>
                <TableCell align="right"><img
                  src={row.boardInfo.image}
                  alt={row.boardInfo.name}
                  style={{ width: "75px", height: "75px" }} // Adjust the size as needed
                /></TableCell>
                <TableCell align="right">{row.boardInfo.price}</TableCell>
                <TableCell align="right">{row.boardInfo.size}</TableCell>
                <TableCell align="right">{row.boardInfo.description}</TableCell>
                <TableCell align="right">{row.boardInfo.manufacturer}</TableCell>
                <Button onClick={() => DeleteBoard(row.cartID)} variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
                </Button>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Cart