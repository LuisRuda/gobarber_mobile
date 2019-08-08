import React from 'react';
import NavigationBar from 'react-native-navbar-color';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Dashboard() {
  NavigationBar.setColor('#8d41a8');
  NavigationBar.setStatusBarTheme('light', true);

  return <Background />;
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
