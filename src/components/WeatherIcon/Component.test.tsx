import 'react-native';
import { WeatherIcon } from '.';

import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

describe('WeatherIcon', () => {
  it('should render correctly', () => {
    renderer.create(<WeatherIcon source="test" />);
  });
});
