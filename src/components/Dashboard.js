// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import TicketTable from './TicketTable';
import axios from 'axios';
import { Container, Button, Typography, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [token] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tickets', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        // Mapear los tickets para reemplazar _id con id
        const ticketsWithId = response.data.map(ticket => ({
          ...ticket,
          id: ticket._id
        }));

        setTickets(ticketsWithId);
      } catch (error) {
        console.error('Error al obtener tickets:', error);
      }
    };

    fetchTickets();
  }, [token]);

  return (
    <Container maxWidth="xl"> {/* Que el contenedor tenga un ancho máximo suficiente */}
      <Box display="flex" flexDirection="column" alignItems="stretch" sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ alignSelf: 'center' }}>
          Tickets
        </Typography>
        <Box display="flex" justifyContent="flex-start" sx={{ marginBottom: 2 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            component={Link}
            to="/create-ticket"
          >
            Nuevo
          </Button>
        </Box>
        <Box width="100%"> {/* Que la caja contenedora de la tabla ocupe todo el ancho disponible */}
          <TicketTable tickets={tickets} />
        </Box>
      </Box>
    </Container>
  );

};

export default Dashboard;
