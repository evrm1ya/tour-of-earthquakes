import { assert } from 'chai';
import TEST_API_DATA from '../test_api_data';
import flatterEqData from '../../utils/data/flatterEqData';

describe('flatterEqData', () => {
  let data;

  beforeEach(() => {
    data = TEST_API_DATA;
  });

  it('reformats geojson into a more managable array', () => {
    assert.deepEqual(flatterEqData(data),
      [{
        "mag": 2.43,
        "place": "23km NE of Greenfield, California",
        "time": 1473106911150,
        "updated": 1473107106374,
        "tz": -420,
        "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nc72690341",
        "detail": "http://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72690341&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 91,
        "net": "nc",
        "code": "72690341",
        "ids": ",nc72690341,",
        "sources": ",nc,",
        "types": ",focal-mechanism,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 37,
        "dmin": 0.04721,
        "rms": 0.06,
        "gap": 57,
        "magType": "md",
        "type": "earthquake",
        "title": "M 2.4 - 23km NE of Greenfield, California",
        "longitude": -121.0465012,
        "latitude": 36.4664993,
        "depth": 6.44,
        "id": "nc72690341"
      },
      {
        "mag": 1.9,
        "place": "128km NE of Cape Yakataga, Alaska",
        "time": 1473106120000,
        "updated": 1473106829606,
        "tz": -420,
        "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak13913582",
        "detail": "http://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ak13913582&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 56,
        "net": "ak",
        "code": "13913582",
        "ids": ",ak13913582,",
        "sources": ",ak,",
        "types": ",general-link,geoserve,origin,",
        "nst": null,
        "dmin": null,
        "rms": 1.02,
        "gap": null,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.9 - 128km NE of Cape Yakataga, Alaska",
        "longitude": -140.8844,
        "latitude": 60.9353,
        "depth": 28.6,
        "id": "ak13913582"
      }
    ]);
  });

  it('mutation to returned data cannot mutate original data', () => {
    let flattenedData = flatterEqData(data);
    flattenedData[0].longitude = 'whut';

    assert(
      data.features[0].geometry.coordinates[0] !== 'whut', 
      'mutation to flattened data did not mutate original data'
    );
  });
});

    
