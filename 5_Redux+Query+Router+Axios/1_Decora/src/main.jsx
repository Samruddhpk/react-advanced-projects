import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { store } from "./store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer position='bottom-right' />
  </Provider>
);
