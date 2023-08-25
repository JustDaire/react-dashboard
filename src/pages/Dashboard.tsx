import React from 'react';
import Chart from '../components/chart';

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="row">
        <div className="col-12">
          <Chart type={'Line'} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
