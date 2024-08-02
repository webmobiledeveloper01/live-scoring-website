import React from 'react'
import CustomTab from '../../components/CustomTabs'
import CustomEditTable from '../../components/CustomEditTable'

import {
  contentMenu,
  columns,
  EditToolbar,
  initialRows
} from './datas/settingdata'
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
import Managersettingpage from './Managersettingpage'
import Teamsetting from './Teamsetting'
import { Main } from '../../styled'
import { useSelector } from 'react-redux'

function Setttingpage () {
  const [select, setSelect] = React.useState(0)
  const [renderPage, setRenderPage] = React.useState(<Teamsetting />)
  //   const open = useSelector(state => state.drawer.open)
  //   const teamInfo = useSelector(state => state.sidebar)
  const menuLists = ['Team setting', 'Manager setting']

  React.useEffect(() => {
    handleMenu(select)
  }, [])

  const handleMenu = (index, text) => {
    setSelect(index)
    switch (index) {
      case 0:
        setRenderPage(<Teamsetting />)
        break
      case 1:
        setRenderPage(<Managersettingpage />)

        break

      default:
        break
    }
  }
  const open = useSelector(state => state.drawer.open)

  return (
    <>
      <Main open={open}>
        <div className='max-w-7xl mx-auto mt-40  max-md:p-20  max-sm:p-5'>
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
                      ('nav-link ',
                      index == select &&
                        '!active !text-yellow-200 !border-b-2 !border-amber-200')
                    }
                    iconPosition='start'
                    label={item}
                    onClick={() => handleMenu(index, item)}
                  ></Tab>
                ))}
              </Tabs>
            </Box>
          </Box>

          <div className='main-body'>{renderPage}</div>
        </div>
      </Main>
    </>
  )
}

export default Setttingpage
