import {memo} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export const Empty = memo(() => (
  <View style={styles.container}>
    <Text style={styles.icon}>📍</Text>
    <Text style={styles.text}>Location is not chosen!</Text>
  </View>
));
