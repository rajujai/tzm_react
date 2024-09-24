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
    <React.StrictMode>
      <Grid container spacing={2} direction="column" alignItems="center">
        <AuthProvider>
          <App />
        </AuthProvider>
      </Grid>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
