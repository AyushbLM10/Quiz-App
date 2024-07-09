import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './admin/Header';

const Admin = () => {
  return (
    <div className="flex">
      <Header />
      <div className="flex-1 bg-gray-200">

        <div className="h-full p-4">
          <Outlet /> {/* This will render the nested routes */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
