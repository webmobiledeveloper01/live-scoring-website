// import React from 'react'
// import CustomSelect from '../../components/CustomSelect'
// import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
// import Stack from '@mui/material/Stack'
// import { contentMenu } from './datas/matchData'

import React from 'react'
import CustomTab from '../../components/CustomTabs'
import CustomEditTable from '../../components/CustomEditTable'
import {
  contentMenu,
  columns,
  EditToolbar,
  initialRows
} from './datas/TourData'
import { Main } from '../../styled'
import { useSelector } from 'react-redux'

function Tournaments () {
  const menuItems = [1, 2, 3, 4]
  const open = useSelector(state => state.drawer.open)

  return (
    <>
      <Main open={open}>
        <div className='max-w-7xl mx-auto mt-28 p20  max-sm:p-5'>
          <CustomTab borderShow={true} tabData={contentMenu} />
          <CustomEditTable
            // customToolbar={EditToolbar}
            columns={columns}
            data={initialRows}
            showActions={false}
          />
        </div>
      </Main>
    </>
  )
}

export default Tournaments