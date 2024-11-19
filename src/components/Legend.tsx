import * as React from 'react';

interface LegendProps {
  type: 'temperature' | 'humidity';
}

const Legend = ({ type }: LegendProps) => {
  const items = type === 'temperature' 
    ? [
        { color: '#4575b4', label: '≤ 20°C' },
        { color: '#74add1', label: '21-25°C' },
        { color: '#abd9e9', label: '26-30°C' },
        { color: '#fdae61', label: '31-35°C' },
        { color: '#d73027', label: '> 35°C' },
      ]
    : [
        { color: '#ffffcc', label: '≤ 30%' },
        { color: '#a1dab4', label: '31-50%' },
        { color: '#41b6c4', label: '51-70%' },
        { color: '#225ea8', label: '> 70%' },
      ];

  return (
    <div className="absolute bottom-8 right-8 bg-white p-4 rounded-lg shadow-lg z-[1000]">
      <h3 className="font-semibold mb-2">
        {type === 'temperature' ? 'Temperature' : 'Humidity'}
      </h3>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded"
              style={{ backgroundColor: item.color }}
            />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;