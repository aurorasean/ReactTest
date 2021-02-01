import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AppContent from './components/AppContent/AppContent';
import store from './redux/store';

function App() {
  return (
    <div className='flexbox_1'>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </div>
  );
}

export default App;
