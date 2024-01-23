import {memo, type FC, PropsWithChildren} from 'react';
import {View} from 'react-native';

import styles from './styles';

export const Block: FC<PropsWithChildren> = memo(({children}) => (
  <View style={styles.container}>{children}</View>
));
