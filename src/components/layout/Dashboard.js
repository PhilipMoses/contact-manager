import React from 'react';
import Users from '../users/Users';
import Sidebar from '../layout/Sidebar';

export default function Dashboard() {
  return (
    <div className="row">
      <div className="col-md-10">
        <Users />
      </div>
      <div className="col-md-2">
        <Sidebar />
      </div>
    </div>
  );
};
