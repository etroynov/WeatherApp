import 'react-native';
import { WeatherMeta } from '.';

import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

describe('WeatherMeta', () => {
  it('should render correctly', () => {
    renderer.create(<WeatherMeta title="test" description="super test" />);
  });
});
