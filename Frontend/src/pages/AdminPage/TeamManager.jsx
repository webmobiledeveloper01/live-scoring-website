import React from 'react';
import ManagerTable from './datas/TeamManageData';
import { Main } from '../../styled'; // Adjust the path based on your project structure
import { useSelector } from 'react-redux';

const TeamManager = () => {
  const open = useSelector(state => state.drawer.open);

  return (
    <Main open={open}>
      
      <div className='max-w-7xl mx-auto mt-40 pl-20 max-md:p-4  max-sm:p-5'>
        <ManagerTable />
      </div>
    </Main>
  );
};

export default TeamManager;
