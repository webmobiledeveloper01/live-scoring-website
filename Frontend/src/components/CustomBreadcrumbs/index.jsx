import * as React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined'

function handleClick (event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

export default function CustomBreadcrumbs ({ data }) {
  return (
    <div
      role='presentation'
      onClick={handleClick}
      style={{ marginBottom: '15px' }}
    >
      <Breadcrumbs aria-label='breadcrumb' separator='›'>
        {data.map((item, index) => (
          <>
            <Link
              key={index}
              underline='hover'
              sx={{ display: 'flex', alignItems: 'center' }}
              color='inherit'
              href='/'
            >
              {index == 0 && (
                <EmojiEventsOutlinedIcon
                  sx={{ mr: 0.5, color: 'var(--main-color)' }}
                  fontSize='inherit'
                />
              )}
              {item.text}
            </Link>
          </>
        ))}
      </Breadcrumbs>
    </div>
  )
}
