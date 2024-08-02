import React from 'react'
import CustomEditTable from '../../../components/CustomEditTable'
import { columns, initialRows } from './datas'
function TeamPage () {
  return <CustomEditTable columns={columns} data={initialRows} />
}

export default TeamPage
