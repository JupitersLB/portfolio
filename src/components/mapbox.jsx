import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { ReactMapboxToken } from './mapboxToken';
import { geojson } from '../../data/geoJSON';

mapboxgl.accessToken = ReactMapboxToken.token;


const Mapbox = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/jupiters/ckewm8z3c0q4u19qkqkr5wm51',
      center: [126.9780, 37.5665],
      zoom: 3.1,
    });

    map.scrollZoom.disable();
    // eslint-disable-next-line func-names, no-unreachable, prefer-arrow-callback
    geojson.features.forEach(function(marker) {
      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker';
      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;

};

export default Mapbox;
