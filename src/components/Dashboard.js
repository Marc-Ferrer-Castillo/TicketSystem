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
    <Container>
      <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{ padding: 1 }}>
        <Typography variant="p" gutterBottom sx={{ alignSelf: 'center' }}>
          Tickets
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          component={Link}
          to="/create-ticket"
          sx={{ marginBottom: 2 }}
        >
          Nuevo
        </Button>
        <TicketTable tickets={tickets} />
      </Box>
    </Container>
  );

};

export default Dashboard;
