import * as React from 'react';
import { Thermometer, Droplets } from 'lucide-react';

interface ControlsProps {
  selectedOverlay: 'temperature' | 'humidity';
  onOverlayChange: (overlay: 'temperature' | 'humidity') => void;
}

const Controls = ({ selectedOverlay, onOverlayChange }: ControlsProps) => {
  return (
    <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-lg z-[1000] space-x-2">
      <button
        className={`p-2 rounded-lg transition-colors ${
          selectedOverlay === 'temperature'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
        onClick={() => onOverlayChange('temperature')}
      >
        <Thermometer className="w-6 h-6" />
      </button>
      <button
        className={`p-2 rounded-lg transition-colors ${
          selectedOverlay === 'humidity'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
        onClick={() => onOverlayChange('humidity')}
      >
        <Droplets className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Controls;