import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import NotFound from './pages/NotFound';
import MainRoutes from './components/templates/MainRoutes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/quizz/*' element={<MainRoutes />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
export default App;
