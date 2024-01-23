import type {FC} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

type Props = {
  value: string;
  onChange(value: string): void;
};

export const SearchBar: FC<Props> = ({value, onChange}) => (
  <View style={styles.component}>
    <TextInput
      value={value}
      placeholder="Enter city name"
      onChangeText={onChange}
    />
  </View>
);
