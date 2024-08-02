import React from 'react'
import CustomTab from '../../components/CustomTabs'
import CustomEditTable from '../../components/CustomEditTable'
import {
  contentMenu,
  columns,
  EditToolbar,
  initialRows
} from './datas/NotifData'
import {
  contentMenuu,
  columnss,
  EditToolbarr,
  initialRowss
} from './datas/adminNoti'

import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Main } from '../../styled'
import { useSelector } from 'react-redux'

function Notimanage () {
  const [select, setSelect] = React.useState(0)
  const [renderPage, setRenderPage] = React.useState(
    <CustomEditTable
      customToolbar={EditToolbar}
      columns={columns}
      data={initialRows}
    />
  )
  //   const open = useSelector(state => state.drawer.open)
  //   const teamInfo = useSelector(state => state.sidebar)
  const menuLists = ['Manager update', 'Admin update']

  React.useEffect(() => {
    handleMenu(select)
  }, [])

  const handleMenu = (index, text) => {
    setSelect(index)
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
        setRenderPage(
          <CustomEditTable
            customToolbar={EditToolbarr}
            columns={columnss}
            data={initialRowss}
          />
        )

        break

      default:
        break
    }
  }
  const open = useSelector(state => state.drawer.open)

  return (
    <>
      <Main open={open}>
        <div className='max-w-7xl mx-auto mt-40 0 max-md:p-20  max-sm:p-5'>
          {/* <CustomTab borderShow={true} tabData={contentMenu} /> */}

          {/* <ul className='na mainnavbar flex gap-4 py-6  cursor-pointer'>
          {menuLists.map((item, index) => (
            <li className='nav-item !text-[16px]' key={index}>
              <a
                className={
                  ('nav-link', index == select && 'active text-yellow-200')
                }
                onClick={() => handleMenu(index, item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul> */}

          <Box sx={{ width: 'auto' }}>
            <Box>
              <Tabs
                // indicatorColor={
                //   borderShow === false || !borderShow ? '' : 'primary'
                // }
                sx={{
                  '& .Mui-selected': {
                    // backgroundColor: !borderShow && '#0D1B28'
                  },
                  '& .MuiTab-root': {
                    minHeight: '61px'
                  }
                }}
                // value={value}
                // onChange={handleChange}
                aria-label='basic tabs example'
                className='bg-[#061727]'
              >
                {menuLists.map((item, index) => (
                  <Tab
                    key={index}
                    // icon={item}
                    className={
                      ('nav-link',
                      index == select && '!active !text-yellow-200')
                    }
                    iconPosition='start'
                    label={item}
                    onClick={() => handleMenu(index, item)}
                  ></Tab>
                ))}
              </Tabs>
            </Box>
          </Box>

          <div className='man-body'>{renderPage}</div>
        </div>
      </Main>
    </>
  )
}

export default Notimanage
