import React from 'react'

function JerseyUploadPopup ({ jersey, onClose }) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-md text-center'>
        <h2 className='text-xl mb-4'>{jersey.title}</h2>
        <input type='file' accept='image/*' className='mb-4' />
        <button
          onClick={onClose}
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default JerseyUploadPopup
