import 'react-native';
import { LocationName } from '.';

import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

describe('LocationName', () => {
  it('should render correctly', () => {
    renderer.create(<LocationName city='Berlin' country='Germany' />);
  });
});
