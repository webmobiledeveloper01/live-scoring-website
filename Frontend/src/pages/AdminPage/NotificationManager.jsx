import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CustomEditTable from '../../components/CustomEditTable';
import { Main } from '../../styled';
import { EditToolbarr } from '../AdminPage/datas/updates';

// Define the columns for the table
const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'title', headerName: 'Title', width: 200 },
  { field: 'description', headerName: 'Description', width: 300 },
  { field: 'status', headerName: 'Status', width: 100 },
  { field: 'createdAt', headerName: 'Created At', width: 150 },
  { field: 'updatedAt', headerName: 'Updated At', width: 150 },
];

function NotificationManager() {
  const [select, setSelect] = useState(0);
  const [rows, setRows] = useState([]); // Initialize rows as an empty array
  const [renderPage, setRenderPage] = useState(<div>Loading...</div>);
  const open = useSelector(state => state.drawer.open);
  const menuLists = ['Admin update'];

  // Fetch official updates from the API when the component mounts
  useEffect(() => {
    fetchOfficialUpdates();
  }, []);

  // Fetch data from API
  const fetchOfficialUpdates = async () => {
    try {
      const response = await fetch('https://live-scoring-website-vjrd.onrender.com/api/official-updates');
      if (!response.ok) throw new Error('Failed to fetch official updates');
      const data = await response.json();
      console.log("updates",data)
      // Transform the data to match the table structure, if necessary
      const transformedData = data.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        status: item.status,
        createdAt: new Date(item.createdAt).toLocaleString(),
        updatedAt: new Date(item.updatedAt).toLocaleString(),
      }));

      setRows(transformedData);  // Set the fetched data into rows state
      handleMenu(select);  // Set the initial render page after data is fetched
    } catch (error) {
      console.error('Error fetching official updates:', error);
    }
  };

  // Handle menu selection and set the corresponding page
  const handleMenu = (index, text) => {
    setSelect(index);
    switch (index) {
      case 0:
        setRenderPage(
          <CustomEditTable
            customToolbar={() => <EditToolbarr setRows={setRows} />}
            columns={columns}
            data={rows}  // Pass the fetched data to CustomEditTable
          />
        );
        break;
      // Add more cases if needed for other menu items

      default:
        break;
    }
  };

  return (
    <>
      <Main open={open}>
        <div className="max-w-7xl mx-auto mt-40 pl20 max-md:p-4">
          {/* <CustomTab borderShow={true} tabData={contentMenuu} /> */}

          <Box sx={{ width: 'auto' }}>
            <Box>
              <Tabs
                sx={{
                  '& .Mui-selected': {
                    // Add styles here
                  },
                  '& .MuiTab-root': {
                    minHeight: '61px',
                  },
                }}
                aria-label="basic tabs example"
              >
                {/* {menuLists.map((item, index) => (
                  <Tab
                    key={index}
                    className={index === select ? 'active text-yellow-200' : ''}
                    label={item}
                    onClick={() => handleMenu(index, item)}
                  />
                ))} */}
              </Tabs>
            </Box>
          </Box>

          <div className="main-bdy">
            {renderPage}  {/* Render the dynamic page content */}
          </div>
        </div>
      </Main>
    </>
  );
}

export default NotificationManager;
