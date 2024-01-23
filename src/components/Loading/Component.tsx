import {memo} from 'react';
import {View, ActivityIndicator} from 'react-native';

export const Loading = memo(() => (
  <View>
    <ActivityIndicator size="large" />
  </View>
));
