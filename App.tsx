import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';

import Routes from './src/routes/index';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'
import { PlantProps } from './src/libs/storage';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  /*useEffect(() => {
    //////////// 1
    //Escutar as notificações
      const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      });

    return () => subscription.remove();
    //////////// 1

    //////////// 2 
    async function notifications() {
      // Apaga todas as notificações
      await Notifications.cancelAllScheduledNotificationsAsync();

      // Mostra todas as notificações
      const data = await Notifications.getAllScheduledNotificationsAsync();
      console.log("##### NOTIFICAÇÕES #######")
      console.log(data);

    }
    ///////////// 2

    notifications();
  }, []);*/

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <Routes />
  )
}