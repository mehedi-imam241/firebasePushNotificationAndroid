import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {
  requestUserPermission,
  NotificationListener,
} from './src/utils/pushnotification_helper';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationListener();
  }, []);

  return (
    <View style={{alignSelf: 'center', flex: 1, justifyContent: 'center'}}>
      <Text style={{fontWeight: 'bold'}}>Push notification app</Text>
    </View>
  );
};

export default App;
