import React, { useState } from 'react';

import { Dashboard, Button } from './components';

function App() {
  const [charts, setCharts] = useState([]);

  const handleAddChart = () => {
    setCharts([...charts, { id: charts.length, name: 'New' }]);
  }

  return (
    <div className="App">
      <Button onClick={handleAddChart}>
        Add
      </Button>
      <Dashboard />
    </div>
  );
}

export default App;
