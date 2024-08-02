import React from 'react'
import CustomEditTable from '../../components/CustomEditTable'
import { columns, initialRows } from './datas/tranferData'
import { EditToolbar } from './datas/tranferData'
import { Main } from '../../styled'
import { useSelector } from 'react-redux'

function TransferPage () {
  const open = useSelector(state => state.drawer.open)

  return (
    <>
      <Main open={open}>
        <div className='max-w-7xl mx-auto mt-40 max-md:p-20  max-sm:p-5'>
          {/* <CustomEditTable columns={columns} data={initialRows} /> */}

          <CustomEditTable
            customToolbar={EditToolbar}
            columns={columns}
            data={initialRows}
          />
        </div>
      </Main>
    </>
  )
}

export default TransferPage
