import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from "../src/component/Dashboard";
import Navbar from "../src/component/Saidbar";
import plashtfiny from "../src/assert/images/Home.svg";
import Loader from "../src/assert/images/loder.svg";
import Campintable from "../src/component/CampingTable"
import ReportTable from "../src/component/ReportTable"
import AnaliticsTable from './component/AnaliticsTable';
import WithdrawalList from './component/withdrawalList';
import RewardAmountDaily from './component/RewardAmountDaily';
import Dailylevelrewardlist from './component/Dailylevelrewardlist';

function App() {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  const handleBackgroundLoad = () => {
    // Wait for 5 seconds before showing the loader
    setTimeout(() => {
      setBackgroundLoaded(true);
    }, 2000);
  };

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      background: "#22262F"
    }}>
      {!backgroundLoaded && (
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#272A30",
        }}>
          <img src={Loader} alt="Loader" className='loderImgesection'/>
        </div>
      )}
      {backgroundLoaded && (
        <div className="background" style={{
          backgroundImage: `url(${plashtfiny})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundColor: "#22262F"
        }}>
          <React.Fragment>
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Campintable" element={<Campintable />} />
              <Route path="/ReportTable" element={<ReportTable />} />
              <Route path="/AnaliticsTable" element={<AnaliticsTable />} />
              <Route path="/withdrawalList" element={<WithdrawalList />} />
              <Route path="/RewardAmountDaily" element={<RewardAmountDaily />} />
              <Route path="/Dailylevelrewardlist" element={<Dailylevelrewardlist />} />
            </Routes>
          </React.Fragment>
        </div>
      )}
      <img
        src={plashtfiny}
        alt="background"
        style={{ display: "none" }}
        onLoad={handleBackgroundLoad}
      />
    </div>
  );
}

export default App;
