import React from 'react'
import './styles/main.scss';
import AppRouter from './components/routes/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function DailyGoalsApp() {
  return (
    <Provider store={ store } >
      <AppRouter />
    </Provider>
  )
}
