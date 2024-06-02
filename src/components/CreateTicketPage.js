// src/components/CreateTicketPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const CreateTicketPage = () => {
  const [formValues, setFormValues] = useState({
    subject: '',
    priority: '',
    status: '',
    description: '',
    assignedTo: '',
    client: '',
    category: '',
    notes: ''
  });

  const [token] = useState(localStorage.getItem('token'));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newTicket = {
        id: uuidv4(),
        ...formValues,
        creationDate: new Date().toISOString(),
        lastUpdate: new Date().toISOString(),
        isArchived: false,
        status: 'Abierto'
    };

    try {
      const response = await axios.post('http://localhost:5000/api/tickets/post', newTicket, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 201) {
        // Redirigir a dashboard
        window.location.href = '/dashboard';
      } else {
        alert('Error al crear el ticket');
        console.error('Error al crear el ticket');
      }
    } catch (error) {
        alert('Error en la llamada POST:', error);
        console.error('Error al hacer la llamada POST:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Crear Nuevo Ticket
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Asunto"
          name="subject"
          value={formValues.subject}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Prioridad</InputLabel>
          <Select
            name="priority"
            value={formValues.priority}
            onChange={handleChange}
            required
          >
            <MenuItem value="Baja">Baja</MenuItem>
            <MenuItem value="Media">Media</MenuItem>
            <MenuItem value="Alta">Alta</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Descripción"
          name="description"
          value={formValues.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
        />
        <TextField
          label="Asignado a"
          name="assignedTo"
          value={formValues.assignedTo}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Cliente"
          name="client"
          value={formValues.client}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Categoría"
          name="category"
          value={formValues.category}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Notas"
          name="notes"
          value={formValues.notes}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={2}
        />
        <Button type="submit" variant="contained" color="primary">
          Crear Ticket
        </Button>
      </form>
    </Container>
  );
};

export default CreateTicketPage;
