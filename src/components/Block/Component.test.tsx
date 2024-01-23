import 'react-native';
import { Block } from '.';

import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

describe('Block', () => {
  it('should render correctly', () => {
    renderer.create(<Block />);
  });
});
