import type {FC, PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

type Props = PropsWithChildren;

const Default: FC<Props> = ({children}) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fef6e4',
  },
});

export default Default;
