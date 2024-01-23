import 'react-native';
import { Forecasts } from '.';

import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

const mock: any[] = [];

describe('Empty', () => {
  it('should render correctly', () => {
    renderer.create(<Forecasts items={mock} />);
  });
});
