import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './assets/locales/i18n';
import './index.css';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <BrowserRouter>
     <Toaster position="top-center" />
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </QueryClientProvider>
);
