import 'react-native';
import { Empty } from '.';

import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

describe('Empty', () => {
  it('should render correctly', () => {
    renderer.create(<Empty />);
  });
});
