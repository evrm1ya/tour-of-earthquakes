const TEST_API_DATA = {
  "type": "FeatureCollection",
  "metadata": {
    "generated": 1473107519000,
    "url": "http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=20&orderby=time",
    "title": "USGS Earthquakes",
    "status": 200,
    "api": "1.5.2",
    "limit": 20,
    "offset": 1,
    "count": 20
  },
  "features": [
    {
      "type": "Feature",
      "properties": {
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
        "title": "M 2.4 - 23km NE of Greenfield, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.0465012,
          36.4664993,
          6.44
        ]
      },
      "id": "nc72690341"
    },
    {
      "type": "Feature",
      "properties": {
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
        "title": "M 1.9 - 128km NE of Cape Yakataga, Alaska"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -140.8844,
          60.9353,
          28.6
        ]
      },
      "id": "ak13913582"
    }
  ]
};

export default TEST_API_DATA;
