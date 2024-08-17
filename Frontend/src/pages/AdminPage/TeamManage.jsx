import React from 'react';
import { DataGrid, GridToolbarContainer } from '@mui/x-data-grid';
import { Button } from '@mui/material';

function CustomEditTable({ customToolbar: CustomToolbar, columns, data }) {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        components={{
          Toolbar: CustomToolbar,
        }}
        componentsProps={{
          toolbar: { setRows: () => {} }, // Adjust as needed
        }}
      />
    </div>
  );
}

export default CustomEditTable;
