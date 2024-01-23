import 'react-native';
import { Condition } from '.';

import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

describe('Condition', () => {
  it('should render correctly', () => {
    renderer.create(<Condition title="test" />);
  });
});
