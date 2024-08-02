import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import './team.css'

import CustomTab from '../../components/CustomTabs'
import CustomEditTable from '../../components/CustomEditTable'
import {
  contentMenu,
  columns,
  EditToolbar,
  initialRows
} from '../AdminPage/datas/CreateTeamdata'
import { Main } from '../../styled'
import { useSelector } from 'react-redux'

const Createteam = () => {
  const open = useSelector(state => state.drawer.open)
  return (
    <>
      <Main open={open} className='mt-40'>
        <div className='max-w-6xl mx-auto mt-10 ml28 max-md:m-0 max-md:p-4'>
          {/* <CustomTab borderShow={true} tabData={contentMenu} /> */}
          <CustomEditTable
            customToolbar={EditToolbar}
            columns={columns}
            data={initialRows}
            showActions={true}
          />
        </div>
      </Main>
    </>
  )
}
export default Createteam
