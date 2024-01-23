import 'react-native';
import App from './App';

import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

describe('App', () => {
  it('should render correctly', () => {
    renderer.create(<App />);
  });
});

