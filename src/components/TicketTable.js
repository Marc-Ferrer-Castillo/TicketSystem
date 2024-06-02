// src/components/TicketTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const TicketTable = ({ tickets }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Asunto</TableCell>
            <TableCell>Prioridad</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Creado el</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Última actualización</TableCell>
            <TableCell>Asignado a</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Categoría</TableCell>
            <TableCell>Notas</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell>{ticket.subject}</TableCell>
              <TableCell>{ticket.priority}</TableCell>
              <TableCell>{ticket.status}</TableCell>
              <TableCell>{ticket.creationDate}</TableCell>
              <TableCell>{ticket.description}</TableCell>
              <TableCell>{ticket.lastUpdate}</TableCell>
              <TableCell>{ticket.assignedTo}</TableCell>
              <TableCell>{ticket.client}</TableCell>
              <TableCell>{ticket.category}</TableCell>
              <TableCell>{ticket.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TicketTable;
