import React from 'react';
import CustomTab from '../../components/CustomTabs';
import CustomEditTable from '../../components/CustomEditTable';

import { contentMenu, columns, EditToolbar, initialRows } from './datas/settingdata';
import { contentMenuu, columnss, EditToolbarr, initialRowss } from './datas/adminNoti';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Managersettingpage from './Managersettingpage';
import Teamsetting from './Teamsetting';
import { Main } from '../../styled';
import { useSelector } from 'react-redux';

function Setttingpage() {
  const [select, setSelect] = React.useState(0);
  const [renderPage, setRenderPage] = React.useState(<Teamsetting />);
  const menuLists = ['Team setting', 'Manager setting'];

  React.useEffect(() => {
    handleMenu(select);
  }, []);

  const handleMenu = (index) => {
    setSelect(index);
    switch (index) {
      case 0:
        setRenderPage(<Teamsetting />);
        break;
      case 1:
        setRenderPage(<Managersettingpage />);
        break;
      default:
        break;
    }
  };

  const open = useSelector(state => state.drawer.open);

  return (
    <Main open={open}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', mt: 10, p: { xs: 2, md: 4 } }}>
        <Tabs
          value={select}
          onChange={(event, newValue) => handleMenu(newValue)}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
          textColor="secondary"
          indicatorColor="secondary"
        >
          {menuLists.map((item, index) => (
            <Tab
              key={index}
              label={item}
              sx={{
                minHeight: '48px',
                textTransform: 'none',
                '&.Mui-selected': {
                  color: 'primary.main',
                  fontWeight: 'bold',
                },
              }}
            />
          ))}
        </Tabs>
        <Box mt={4} sx={{ px: { xs: 2, md: 4 } }}>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            {renderPage}
          </Box>
        </Box>
      </Box>
    </Main>
  );
}

export default Setttingpage;
