import {memo, type FC} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

type Props = {
  title: string;
};

export const Condition: FC<Props> = memo(({title}) => (
  <View>
    <Text style={styles.title}>{title}</Text>
  </View>
));
