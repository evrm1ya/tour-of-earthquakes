import { expect } from 'chai';
import rootReducer from '../../reducers';
import * as actions from '../../actions';
import TEST_API_DATA from '../test_api_data';
import MOCK_MAGNITUDE_DATA from '../mock_magnitude_data';
import flatterEqData from '../../utils/data/flatterEqData';
import { largestItemToSmallestByProp } from '../../utils/sorting';

describe('earthquakes reducer', () => {
  it('stores all raw earthquake meta data', () => {
    const newState = rootReducer(
      undefined, 
      actions.setEarthquakeMetadata(TEST_API_DATA.metadata)
    );

    expect(newState.earthquakes.metadata).to.eql({
      generated: 1473107519000,
      url: "http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=20&orderby=time",
      title: "USGS Earthquakes",
      status: 200,
      api: "1.5.2",
      limit: 20,
      offset: 1,
      count: 20
    });
  });

  it('stores all flattened earthquake feature data', () => {
    const newState = rootReducer(
      undefined, 
      actions.setFlattenedEarthquakeData(flatterEqData(TEST_API_DATA))
    );

    expect(newState.earthquakes.flattened).to.eql([
      {
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

  it('stores all flattened earthquake data sorted by magnitude', () => {
    const newState = rootReducer(
      undefined,
      actions.setEarthquakesSortedByMagnitude(
        largestItemToSmallestByProp(
          'mag', 
          MOCK_MAGNITUDE_DATA
        )
      )
    );

    expect(newState.earthquakes.sortedByMagnitude).to.eql([
      { id: 'vwy', mag: 5.1 },
      { id: 'stu', mag: 5.0 },
      { id: 'pqr', mag: 4.0 },
      { id: 'mno', mag: 3.0 },
      { id: 'def', mag: 2.0 },
      { id: 'ghi', mag: 2.0 },
      { id: 'abc', mag: 1.0 },
      { id: 'jkl', mag: 1.0 },
    ]);
  });

  it('stores all earthquakes sorted by time', () => {
    const mock = [
      { id: 'abc', time: 555 },
      { id: 'xyz', time: 222 },
      { id: 'def', time: 777 },
      { id: 'pqr', time: 333 },
      { id: 'jkl', time: 111 }
    ];

    const newState = rootReducer(
      undefined,
      actions.setEarthquakesSortedByTime(largestItemToSmallestByProp('time', mock))
    );

    expect(newState.earthquakes.sortedByTime).to.eql([
      { id: 'def', time: 777 },
      { id: 'abc', time: 555 },
      { id: 'pqr', time: 333 },
      { id: 'xyz', time: 222 },
      { id: 'jkl', time: 111 }
    ]);
  });
});

