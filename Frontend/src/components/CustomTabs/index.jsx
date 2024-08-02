import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'

function CustomTabPanel (props) {
  const { children, value, index, ...other } = props
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className='bg-[#061727]'
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

export default function CustomTabs ({ tabData, borderShow, tabWidth, index }) {
  const [value, setValue] = React.useState(0)
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const moveLink = url => {
    navigate(url)
  }
  React.useEffect(() => {
    index && tabData[index] && navigate(tabData[index].url)
  }, [])

  return (
    <Box sx={{ width: 'auto' }}>
      <Box>
        <Tabs
          indicatorColor={borderShow === false || !borderShow ? '' : 'primary'}
          sx={{
            '& .Mui-selected': {
              backgroundColor: !borderShow && '#0D1B28'
            },
            '& .MuiTab-root': {
              minHeight: '61px'
            }
          }}
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          className='bg-[#061727]'
        >
          {tabData.map((item, index) => (
            <Tab
              key={index}
              icon={item.icon}
              iconPosition='start'
              label={item.text}
              onClick={() => item.url && moveLink(item.url)}
            ></Tab>
          ))}
        </Tabs>
      </Box>
    </Box>
  )
}
