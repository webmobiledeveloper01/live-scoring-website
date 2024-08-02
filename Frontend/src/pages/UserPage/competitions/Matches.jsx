import React from 'react'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
function Matches () {
  const roundItems = [
    { title: 'ROUND 28', menuItems: [1, 2, 3] },
    { title: 'ROUND 27', menuItems: [1, 2] }
  ]
  return (
    <>
      {roundItems.map((item, index) => (
        <div key={index}>
          <p style={{ margin: '20px 0 2px 0' }}>{item.title}</p>
          <div className='main-body competition-items'>
            <div className='d-flex match-item-column'>
              <div className='match-item-column-date'>DATE</div>
              <div className='match-item-column-team'>TEAM</div>
            </div>
            {item.menuItems.map((item, index) => (
              <div key={index} className='d-flex match-item align-center'>
                <div className='d-flex match-item-date align-center'>
                  <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
                  <div>
                    <p>10/20/2024</p>
                    <p>09:00</p>
                  </div>
                </div>
                <div className='d-flex flex-column match-item-team'>
                  <div>
                    <img
                      className='team-mark-small'
                      src='https://lsm-static-prod.livescore.com/medium/enet/8633.png'
                    />
                    <span>Leral Madrid</span>
                  </div>
                  <div>
                    <img
                      className='team-mark-small'
                      src='https://lsm-static-prod.livescore.com/medium/enet/8633.png'
                    />
                    <span>Leral Madrid</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default Matches
