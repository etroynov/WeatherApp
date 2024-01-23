import 'react-native';
import { Card } from '.';

import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

describe('Card', () => {
  it('should render correctly', () => {
    renderer.create(<Card />);
  });
});
