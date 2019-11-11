import React from 'react';
import theme from './Common/theme';
import { ThemeProvider } from '@material-ui/styles';
import TaskBoarks from './Container/TaskBoarks';
import {Provider} from "react-redux";
import configStore from './Redux/ConfigStore';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './Loading/Loading';
import ModalComponet from './Component/Modal';

const store = configStore();
function App() {
  return (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
              <ToastContainer />
              <TaskBoarks></TaskBoarks>
              <Loading></Loading>
              <ModalComponet></ModalComponet>
        </ThemeProvider>
    </Provider>
  );
}

export default App;
