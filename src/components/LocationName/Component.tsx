import {memo, type FC} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

type Props = {
  country: string;
  city: string;
};

export const LocationName: FC<Props> = memo(({country, city}) => (
  <View style={styles.component}>
    <Text style={styles.title}>{city}</Text>
    <Text style={styles.subTitle}>, {country}</Text>
  </View>
));
