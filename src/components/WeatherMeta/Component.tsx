import {memo, type FC} from 'react';
import {Text} from 'react-native';

import {Card} from '..';

import styles from './styles';

type Props = {
  title: string;
  description: string | number;
};

export const WeatherMeta: FC<Props> = memo(({title, description}) => (
  <Card>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </Card>
));
