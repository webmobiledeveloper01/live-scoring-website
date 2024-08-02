import React from 'react'
import CustomEditTable from '../../../components/CustomEditTable'
import { columns, initialRows } from './datas/tranferData'

function Transfer () {
  return (
    <CustomEditTable columns={columns} data={initialRows} actionMode={false} />
  )
}

export default Transfer
