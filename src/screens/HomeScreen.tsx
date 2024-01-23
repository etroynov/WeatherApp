import {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {useQuery} from '@tanstack/react-query';
import {useDebounce} from 'use-debounce';

import {
  Empty,
  Loading,
  Temperature,
  LocationName,
  SearchBar,
  WeatherIcon,
  Condition,
  Forecasts,
  Block,
  WeatherMeta,
} from '../components';

import {DefaultLayout} from '../layouts';
import {WeatherService, type Weather} from '../services';

export const HomeScreen = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(query, 500);

  const {data: weather, isLoading} = useQuery<Weather, Error>({
    queryKey: ['weather', debouncedQuery],
    queryFn: () => WeatherService.getForcastByLocation(debouncedQuery),
    enabled: Boolean(query) && query.length > 2,
  });

  return (
    <DefaultLayout>
      <View style={styles.header}>
        <SearchBar value={query} onChange={setQuery} />
      </View>

      <View style={styles.body}>
        {weather && !isLoading ? (
          <>
            <View style={styles.center}>
              <LocationName
                country={weather.location.country}
                city={weather.location.name}
              />

              <WeatherIcon source={weather.current.condition.icon} />
              <Temperature value={weather.current.temp_c} symbol="&#176;" />
              <Condition title={weather.current.condition.text} />

              <View style={styles.list}>
                <WeatherMeta
                  title="Wind"
                  description={weather.current.wind_kph}
                />
                <WeatherMeta
                  title="Humidity"
                  description={weather.current.humidity}
                />
                <WeatherMeta
                  title="Cloud"
                  description={weather.current.cloud}
                />
              </View>
            </View>
            <View>
              <Forecasts items={weather.forecast.forecastday[0].hour} />
            </View>
          </>
        ) : null}

        {!weather && !isLoading ? (
          <Block>
            <Empty />
          </Block>
        ) : null}

        {isLoading ? (
          <Block>
            <Loading />
          </Block>
        ) : null}
      </View>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0,
  },
  body: {
    flex: 1,
    // justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCenter: {
    textAlign: 'center',
  },
});
