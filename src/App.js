import React, { useState } from 'react';
import SalesPage from './pages/SalesPage';
import MarketingPage from './pages/MarketingPage';

function App() {
  const [tab, setTab] = useState('sales');

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>CRM Dashboard</h1>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setTab('sales')}>Sales</button>
        <button onClick={() => setTab('marketing')} style={{ marginLeft: '10px' }}>Marketing</button>
      </div>
      {tab === 'sales' ? <SalesPage /> : <MarketingPage />}
    </div>
  );
}

export default App;
