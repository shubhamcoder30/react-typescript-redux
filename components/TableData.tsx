import React, { useState, useEffect } from 'react';
import { Iface } from '../Interfaces';
import { RootState } from '../reducers';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    marginTop: 40,
    minWidth: 50
  },
  head: {
    backgroundColor: 'aqua',
    color: 'white'
  }
});
const Tabledata = () => {
  const classes = useStyles();
  const mystate = useSelector((state: RootState) => state.storeData);
  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell>Employee ID</TableCell>
            <TableCell>Employee Name</TableCell>
            <TableCell>Employee Profile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mystate.map((data: Iface, key: number) => (
            <TableRow key={key}>
              <TableCell>{key}</TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.profile}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Tabledata;
