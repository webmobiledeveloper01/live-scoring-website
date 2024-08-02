import React, { useState } from 'react'
import './adminstyle.css'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'

import CustomTab from '../../components/CustomTabs'
import CustomEditTable from '../../components/CustomEditTable'
import {
  contentMenu,
  columns,
  EditToolbar,
  initialRows
} from '../AdminPage/datas/tournamentDetailData'
import TourManageDetail from './TourManageDetail'
import OfficalPage from './TourManageDetail/OfficalPage'

const TournamentManagement = () => {
  const [RenderPage, setRenderPage] = React.useState(
    <CustomEditTable
      customToolbar={EditToolbar}
      columns={columns}
      data={initialRows}
    />
  )

  const [select, setSelect] = React.useState(0)

  const menuLists = ['Tournament', 'Live', 'Players']

  const handleMenu = (index, text) => {
    setSelect(index)
    console.log(index)
    switch (index) {
      case 0:
        setRenderPage(
          <CustomEditTable
            customToolbar={EditToolbar}
            columns={columns}
            data={initialRows}
          />
        )
        break
      case 1:
        setRenderPage(<TourManageDetail />)
        break
      case 2:
        setRenderPage(<OfficalPage />)
        break

      default:
        break
    }
  }
  return (
    <>
      <div className='max-w-6xl mx-auto mt-10 ml28 max-md:m-0 max-md:p-4'>
        <ul className='nav main-nav  flex gap-8  bg-[#061727] min-h-[64px] items-center'>
          {menuLists.map((item, index) => (
            <li className='nav-item  cursor-pointer p-4 ' key={index}>
              <a
                className={
                  ('nav-link cursor-pointer',
                  index == select && '!active !text-yellow-200')
                }
                onClick={() => handleMenu(index, item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        {/* <CustomTab borderShow={true} tabData={contentMenu} /> */}
        <div className='mai-body'>{RenderPage}</div>
      </div>
    </>
  )
}

export default TournamentManagement
