import 'react-native';
import { Loading } from '.';

import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

describe('Loading', () => {
  it('should render correctly', () => {
    renderer.create(<Loading />);
  });
});
