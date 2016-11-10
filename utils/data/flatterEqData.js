import { map, compose, prop } from 'ramda';

//export default function flatterEqData(geoJson) {
//  return map(feature => {
//    const {
//      id,
//      geometry: { coordinates: geo },
//      properties
//    } = feature;
//
//    const coords = {
//      longitude: geo[0],
//      latitude: geo[1],
//      depth: geo[2]
//    };
//
//    return Object.assign({}, { id, ...properties, ...coords });
//  }, geoJson.features);
//}
//

const flattenedFeature = (feature) => {
  const {
    id,
    geometry: { coordinates: geo },
    properties
  } = feature;

  const coords = {
    longitude: geo[0],
    latitude: geo[1],
    depth: geo[2]
  };

  return { id, ...properties, ...coords };
};

const flatterEqData = compose(map(flattenedFeature), prop('features'));

export default flatterEqData;

