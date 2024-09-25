import { Grid2 as Grid } from "@mui/material";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App';
import { AuthProvider } from "./context/AuthContext";
import './index.css';
import { store } from "./redux/store";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AuthProvider>
      <React.StrictMode>
        <Grid container spacing={2} direction="column" alignItems="center">
          <App />
        </Grid>
      </React.StrictMode>
    </AuthProvider>
  </Provider>
);

reportWebVitals();
