import type {FC} from 'react';

import {HomeScreen} from './src/screens';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const client = new QueryClient();

const App: FC = () => (
  <QueryClientProvider client={client}>
    <HomeScreen />
  </QueryClientProvider>
);

export default App;
