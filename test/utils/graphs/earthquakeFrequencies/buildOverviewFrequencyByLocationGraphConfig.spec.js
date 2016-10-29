import { expect } from 'chai';
import MOCK_FREQUENCY_CONFIG from 
'../../../../utils/graphs/earthquakeFrequencies/mock_frequency_config';
import buildOverviewFrequencyByLocationGraphConfig from 
'../../../../utils/graphs/earthquakeFrequencies/buildOverviewFrequencyByLocationGraphConfig';
import staticOverviewFrequencyByLocationGraphConfig from 
'../../../../utils/graphs/earthquakeFrequencies/staticOverviewFrequencyByLocationGraphConfig';

const MOCK_TOP_FIVE = [
  { location: 'California', frequency: 10 },
  { location: 'Kansas', frequency: 9 },
  { location: 'Hawaii', frequency: 8 },
  { location: 'British Virgin Isles', frequency: 6 },
  { location: 'Oklahoma', frequency: 2 }
];

describe('buildOverviewFrequencyByLocationGraphConfig', () => {
  it('returns a config that matches MOCK_FREQUENCY_CONFIG', () => {
    const config = buildOverviewFrequencyByLocationGraphConfig(
      staticOverviewFrequencyByLocationGraphConfig,
      MOCK_TOP_FIVE
    );

    expect(config).to.eql(MOCK_FREQUENCY_CONFIG);
  });
});

