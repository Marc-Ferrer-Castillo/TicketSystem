import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Tooltip, Menu, MenuItem, Chip } from '@mui/material';
import { Delete, Archive, MoreVert } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  '& .MuiTableHead-root': {
    backgroundColor: theme.palette.primary.main,
  },
  '& .MuiTableCell-head': {
    fontWeight: 'bold',
    color: theme.palette.common.white,
    textAlign: 'center',
  },
  '& .MuiTableCell-body': {
    textAlign: 'center',
  },
  '& .MuiTableRow-root:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '& .MuiChip-root': {
    margin: theme.spacing(0.5),
  },
  '& .MuiIconButton-root': {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'Alta':
      return 'error';
    case 'Media':
      return 'warning';
    case 'Baja':
      return 'primary';
    default:
      return 'default';
  }
};

const TicketTable = ({ tickets, onDelete, onArchive, onStatusChange }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentTicket, setCurrentTicket] = React.useState(null);

  const handleMenuOpen = (event, ticket) => {
    setAnchorEl(event.currentTarget);
    setCurrentTicket(ticket);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentTicket(null);
  };

  const handleStatusChange = (status) => {
    onStatusChange(currentTicket.id, status);
    handleMenuClose();
  };

  return (
    <StyledTableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {['Asunto', 'Prioridad', 'Estado', 'Creado el', 'Descripción', 'Última actualización', 'Asignado a', 'Cliente', 'Categoría', 'Notas', 'Acciones'].map((header) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell>{ticket.subject}</TableCell>
              <TableCell>
                <Chip
                  label={ticket.priority}
                  color={getPriorityColor(ticket.priority)}
                  sx={{ margin: '0.5em' }}
                />
              </TableCell>
              <TableCell>{ticket.status}</TableCell>
              <TableCell>{ticket.creationDate}</TableCell>
              <TableCell>{ticket.description}</TableCell>
              <TableCell>{ticket.lastUpdate}</TableCell>
              <TableCell>{ticket.assignedTo}</TableCell>
              <TableCell>{ticket.client}</TableCell>
              <TableCell>{ticket.category}</TableCell>
              <TableCell>{ticket.notes}</TableCell>
              <TableCell sx={{ display: 'flex', justifyContent: 'center' }}>
                <Tooltip title="Más opciones">
                  <IconButton onClick={(event) => handleMenuOpen(event, ticket)}>
                    <MoreVert />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Archivar">
                  <IconButton onClick={() => onArchive(ticket.id)}>
                    <Archive />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Borrar">
                  <IconButton onClick={() => onDelete(ticket.id)} style={{ color: 'red' }}>
                    <Delete />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {['Pendiente', 'En progreso', 'Completado'].map((status) => (
          <MenuItem key={status} onClick={() => handleStatusChange(status)}>
            {status}
          </MenuItem>
        ))}
      </Menu>
    </StyledTableContainer>
  );
};

export default TicketTable;
