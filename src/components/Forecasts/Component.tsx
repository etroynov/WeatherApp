import {memo, type FC} from 'react';
import {FlatList, Text} from 'react-native';

import {Card} from '..';
import {getFiteredList, getTime} from '../../utils';

import type {ForecastHour} from '../../services';

import styles from './styles';

type Props = {
  items: ForecastHour[];
};

export const Forecasts: FC<Props> = memo(({items}) => (
  <FlatList
    data={getFiteredList(items, new Date(), 5)}
    horizontal
    renderItem={({item}) => (
      <Card style={styles.card} key={item.time}>
        <Text style={styles.time}>{getTime(item.time_epoch)}</Text>
        <Text style={styles.temp}>{item.temp_c} &#176;</Text>
      </Card>
    )}
  />
));
