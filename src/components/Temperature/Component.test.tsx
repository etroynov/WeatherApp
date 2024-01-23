import 'react-native';
import { Temperature } from '.';

import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

describe('Temperature', () => {
  it('should render correctly', () => {
    renderer.create(<Temperature value={72} symbol="a" />);
  });
});
