// src/components/TeamRegistrationForm.js
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const TeamRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = async data => {
    const formData = new FormData()
    formData.append('teamName', data.teamName)
    formData.append('logo', data.logo[0])
    formData.append('contactEmail', data.contactEmail)
    formData.append('representativeName', data.representativeName)
    formData.append('representativeContact', data.representativeContact)
    formData.append('managerName', data.managerName)
    formData.append('managerContact', data.managerContact)
    formData.append('paymentSlip', data.paymentSlip[0])

    try {
      const response = await axios.post('your-api-endpoint', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='max-w-lg mxuto mx-5 mr-[30%] pl20 bgwhite shadow-md rounded-md'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Team Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div>
          <label className='block mb-2 font-semibold'>Team Name:</label>
          <input
            className='w-full p-2 border rounded-md'
            {...register('teamName', { required: true })}
          />
          {errors.teamName && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>
        <div>
          <label className='block mb-2 font-semibold'>Logo:</label>
          <input
            type='file'
            className='w-full p-2 border rounded-md'
            {...register('logo', { required: true })}
          />
          {errors.logo && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>
        <div>
          <label className='block mb-2 font-semibold'>Contact Email:</label>
          <input
            type='email'
            className='w-full p-2 border rounded-md'
            {...register('contactEmail', { required: true })}
          />
          {errors.contactEmail && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>
        <div>
          <label className='block mb-2 font-semibold'>
            Representative Name:
          </label>
          <input
            className='w-full p-2 border rounded-md'
            {...register('representativeName', { required: true })}
          />
          {errors.representativeName && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>
        <div>
          <label className='block mb-2 font-semibold'>
            Representative Contact:
          </label>
          <input
            className='w-full p-2 border rounded-md'
            {...register('representativeContact', { required: true })}
          />
          {errors.representativeContact && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>
        <div>
          <label className='block mb-2 font-semibold'>Manager Name:</label>
          <input
            className='w-full p-2 border rounded-md'
            {...register('managerName', { required: true })}
          />
          {errors.managerName && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>
        <div>
          <label className='block mb-2 font-semibold'>Manager Contact:</label>
          <input
            className='w-full p-2 border rounded-md'
            {...register('managerContact', { required: true })}
          />
          {errors.managerContact && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>
        <div>
          <label className='block mb-2 font-semibold'>Payment Slip:</label>
          <input
            type='file'
            className='w-full p-2 border rounded-md'
            {...register('paymentSlip', { required: true })}
          />
          {errors.paymentSlip && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white p-2 rounded-md font-semibold'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default TeamRegistrationForm
