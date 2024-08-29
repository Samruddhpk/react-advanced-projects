import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "react-toastify/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <>
    <ToastContainer position='top-right' autoClose={1000} />
    <App />
  </>
);
