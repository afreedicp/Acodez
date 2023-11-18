import { useState } from 'react';
import './App.css';
import Application from './components/Application';
import FeatureImage from './components/FeatureImage';
import Footer from './components/Footer';
import Founders from './components/Founder';
import Navbar from './components/Navbar';
import Possibilities from './components/Possibilities';
import StatusTab from './components/StatusTab';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <FeatureImage />
      <StatusTab />
      <Possibilities />
      <Application />
      <Founders />
      <Footer />
    </div>
  );
}

export default App;
