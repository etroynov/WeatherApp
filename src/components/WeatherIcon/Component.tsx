import {memo, type FC} from 'react';
import {View, Image} from 'react-native';

import {getIconURI} from '../../utils/getIconURI';

import styles from './styles';

type Props = {
  source: string;
};

export const WeatherIcon: FC<Props> = memo(({source}) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{uri: getIconURI(source)}} />
  </View>
));
