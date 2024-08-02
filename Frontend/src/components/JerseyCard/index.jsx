import React from 'react'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

function JerseyCard ({ title, icon, option, onClick }) {
  const [remove, setRemove] = React.useState(false)
  const handleDelete = function () {
    setRemove(true)
  }
  return (
    <>
      {!remove && (
        <div className='jersey-card d-flex flex-column '>
          <div className='card-head d-flex j-between'>
            <div className='card-title'>{title}</div>
            {option !== 'new' && (
              <div className='card-tool'>
                <FileUploadOutlinedIcon onClick={onClick} />
                <DeleteOutlineOutlinedIcon onClick={handleDelete} />
              </div>
            )}
          </div>
          <img
            src={icon}
            alt=''
            className='card-img'
            style={option && { filter: 'brightness(0)' }}
            onClick={onClick}
          />
          {option == 'new' && (
            <AddOutlinedIcon
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)'
              }}
            ></AddOutlinedIcon>
          )}
        </div>
      )}
    </>
  )
}

export default JerseyCard
