import {memo, type FC, PropsWithChildren} from 'react';
import {View} from 'react-native';

import styles from './styles';

type Props = PropsWithChildren<{
  style?: any;
}>;

export const Card: FC<Props> = memo(({style, children}) => (
  <View style={{...styles.container, ...style}}>{children}</View>
));
