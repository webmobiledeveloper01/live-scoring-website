import React from 'react'
import CustomTab from '../../components/CustomTabs'
import CustomEditTable from '../../components/CustomEditTable'
import {
  contentMenu,
  columns,
  EditToolbar,
  initialRows
} from './datas/squadData'
import { Main } from '../../styled'
import { useSelector } from 'react-redux'

function SquadPage () {
  const open = useSelector(state => state.drawer.open)

  return (
    <>
      <Main open={open}>
        <div className='max-w-7xl mx-auto mt-40  max-md:p-20 max-sm:p-5'>
          <CustomTab
            className='!bg-[#061727]'
            borderShow={true}
            tabData={contentMenu}
          />
          <CustomEditTable
            customToolbar={EditToolbar}
            columns={columns}
            data={initialRows}
          />
        </div>
      </Main>
    </>
  )
}

export default SquadPage
