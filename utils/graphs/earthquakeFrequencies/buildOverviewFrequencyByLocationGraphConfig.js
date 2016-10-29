import { map, merge } from 'ramda';

// basically just build the series
export default function buildOverviewFrequencyByLocationGraphConfig(
  config, topFiveFrequenciesByLocation
) {
  const seriesData = map(frequencyByLocation => {
    const { location, frequency } = frequencyByLocation;
    return [ location, frequency ];
  }, topFiveFrequenciesByLocation);

  const categories = map(frequencyByLocation => {
    return frequencyByLocation.location;
  }, topFiveFrequenciesByLocation);

  return merge(config, {
    series: [
      {
        data: seriesData,
        dataLabels: {
          align: 'center',
          enabled: true
        }
      }
    ],
    
    xAxis: {
      ...config.xAxis,
      categories
    }
  });
}

