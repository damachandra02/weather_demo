import { useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import karnatakaData from '../data/karnataka-districts.json';
import * as L from 'leaflet';

interface MapProps {
  selectedOverlay: 'temperature' | 'humidity';
}

const Map = ({ selectedOverlay }: MapProps) => {
  useEffect(() => {
    // Fix Leaflet icon issue
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

  const getColor = (value: number, type: 'temperature' | 'humidity') => {
    if (type === 'temperature') {
      if (value <= 20) return '#4575b4';
      if (value <= 25) return '#74add1';
      if (value <= 30) return '#abd9e9';
      if (value <= 35) return '#fdae61';
      return '#d73027';
    } else {
      if (value <= 30) return '#ffffcc';
      if (value <= 50) return '#a1dab4';
      if (value <= 70) return '#41b6c4';
      return '#225ea8';
    }
  };

  const style = (feature: any) => {
    const value = selectedOverlay === 'temperature' 
      ? feature.properties.temperature 
      : feature.properties.humidity;
    
    return {
      fillColor: getColor(value, selectedOverlay),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  };

  return (
    <MapContainer
      center={[15.3173, 75.7139]}
      zoom={7}
      className="w-full h-[calc(100vh-4rem)]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON
        data={karnatakaData as any}
        style={style}
        onEachFeature={(feature, layer) => {
          layer.bindTooltip(
            `<div>
              <strong>${feature.properties.name}</strong><br/>
              Temperature: ${feature.properties.temperature}°C<br/>
              Humidity: ${feature.properties.humidity}%
            </div>`,
            { sticky: true }
          );
        }}
      />
    </MapContainer>
  );
};

export default Map;