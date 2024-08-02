import React from 'react'
import CustomEditTable from '../../../components/CustomEditTable'
import { columns, initialRows } from './datas/standingData'
import CustomTabs from '../../../components/CustomTabs'

function Standing () {
  const tabs = [{ text: 'All' }, { text: 'Home' }, { text: 'Away' }]

  return (
    <>
      <CustomTabs borderShow={true} tabData={tabs} />
      <CustomEditTable
        columns={columns}
        data={initialRows}
        actionMode={false}
      />
    </>
  )
}

export default Standing
