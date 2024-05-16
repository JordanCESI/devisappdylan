import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { FormProvider } from './context/FormContext';

function App() {
   return (
    <>
     <FormProvider>
        <Outlet/>
     </FormProvider>
    </>
  );
}

export default App;
