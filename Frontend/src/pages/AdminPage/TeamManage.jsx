import React from 'react'
import CustomEditTable from '../../components/CustomEditTable'
import { columns, initialRows, EditToolbar } from './datas/TeamManageData'

function TeamManage () {
  return (
    <div className='main-body' style={{ marginTop: 30 }}>
      <CustomEditTable
        customToolbar={EditToolbar}
        columns={columns}
        data={initialRows}
      />
    </div>
  )
}

export default TeamManage
