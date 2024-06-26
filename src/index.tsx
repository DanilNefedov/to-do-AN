import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider } from '@mui/material';
import { theme } from './config/themeMUI/theme';
import { RouterProvider } from 'react-router-dom';
import { router } from './routing';
import { Loading } from './component/tools/Loading';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<Loading></Loading>}/>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

