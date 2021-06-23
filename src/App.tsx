import React, { useState } from 'react';

import { Dashboard, Button, Chart } from './components';

type ChartDTO = {
  id: number,
  title: string,
  description: string,
}

function App() {
  const [charts, setCharts] = useState<ChartDTO[]>([]);

  const handleAddChart = () => {
    setCharts([...charts, { id: charts.length, title: 'New', description: 'desc' }]);
  }

  return (
    <div className="App">
      <Button onClick={handleAddChart}>
        Add
      </Button>
      <Dashboard>
        <>
        {charts.map(() => {
          return <Chart />
        })}
        </>
      </Dashboard>
    </div>
  );
}

export default App;
