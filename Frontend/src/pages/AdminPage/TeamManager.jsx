import React, { useState } from 'react'
import './adminstyle.css'
import CustomEditTable from '../../components/CustomEditTable'

import { columns, initialRows, EditToolbar } from './datas/TeamManageData'
import { Main } from '../../styled'
import { useSelector } from 'react-redux'

const TeamManager = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'John Doe',
      number: '1234567890',
      username: 'johndoe',
      password: 'password123'
    },
    {
      id: 2,
      name: 'Jane Smith',
      number: '9876543210',
      username: 'janesmith',
      password: 'password456'
    }
  ])

  const [newMember, setNewMember] = useState({
    name: '',
    number: '',
    username: '',
    password: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setNewMember(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    const newMemberWithId = { ...newMember, id: Date.now() }
    setTeamMembers([...teamMembers, newMemberWithId])

    // Reset form fields
    setNewMember({ name: '', number: '', username: '', password: '' })
  }

  const open = useSelector(state => state.drawer.open)

  return (
    <Main open={open}>
      <div className='max-w-7xl mx-auto mt-40 pl-20 max-md:p-4  max-sm:p-5'>
        <CustomEditTable
          customToolbar={EditToolbar}
          columns={columns}
          data={initialRows}
          showActions={true}
        />
      </div>
    </Main>
  )
}

export default TeamManager
