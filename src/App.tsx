import { useState } from 'react';
import Map from './components/Map';
import Legend from './components/Legend';
import Controls from './components/Controls';

function App() {
  const [selectedOverlay, setSelectedOverlay] = useState<'temperature' | 'humidity'>('temperature');

  return (
    <div className="relative w-full h-screen">
      <Map selectedOverlay={selectedOverlay} />
      <Legend type={selectedOverlay} />
      <Controls
        selectedOverlay={selectedOverlay}
        onOverlayChange={setSelectedOverlay}
      />
    </div>
  );
}

export default App;