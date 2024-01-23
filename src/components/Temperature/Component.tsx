import {memo, type FC} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

type Props = {
  value: number;
  symbol: string;
};

export const Temperature: FC<Props> = memo(({value, symbol}) => (
  <View style={styles.component}>
    <Text style={styles.text}>
      {value}
      {symbol}
    </Text>
  </View>
));
