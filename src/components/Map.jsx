import React from 'react';
import {useRef, useEffect, useState} from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import '../style-components/map.css';

const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(2.00);
    const [lat] = useState(46.68);
    const [zoom] = useState(5.5);
    const [API_KEY] = useState('4sE0MBX4XpmZocqe4c6z');

    useEffect(() => {
        // permet d'initialiser la map qu'une seule fois
        if (map.current) return;
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style:`https://api.maptiler.com/maps/streets-v2-night/style.json?key=${API_KEY}`,
            center: [lng, lat],
            zoom : zoom
        });
    });

    return (
        
        <div className='map-wrap'>
            <div ref={mapContainer} className="map" /> 
        </div>
    );
};

export default Map;