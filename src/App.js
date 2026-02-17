import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import FreelanceWebsite from './components/page';

function App() {
  return (
    <div className='font-GoogleSans'>
      <FreelanceWebsite/>
      <SpeedInsights />
    </div>
  );
}

export default App;
