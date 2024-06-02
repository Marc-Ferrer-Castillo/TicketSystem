import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CreateTicketPage from './components/CreateTicketPage';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
              <Route path="/create-ticket" element={<PrivateRoute component={CreateTicketPage} />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </header>
        </div>
      </Router>
    </ThemeProvider>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token');
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default App;
