import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Main from "./Main";
import Outdoor from "./Outdoor";
import Commute from "./Commute";
import Beach from "./Beach";
import Pricing from "./Pricing";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Forecast from './Forecast';

function Layout() {
    return (
        <Outlet />
    );
  }

export default function App() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            What to Wear
          </Typography>
          <Button href="/" color="inherit">Home</Button>
        </Toolbar>
      </AppBar>
    </Box>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/outdoor" element={<Outdoor />} />
            <Route path="/commute" element={<Commute />} />
            <Route path="/beach" element={<Beach />} />
            <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
      </>
  );
} 
