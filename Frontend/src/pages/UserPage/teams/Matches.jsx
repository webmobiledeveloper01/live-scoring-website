import React from 'react'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import CustomTabs from '../../../components/CustomTabs'

function Matches () {
  const matchItems = [1, 2, 3, 4]
  const tabs = [{ text: 'Fixtures' }, { text: 'Results' }]
  return (
    <>
      <CustomTabs borderShow={true} tabData={tabs} />
      {matchItems.map((item, index) => (
        <div key={index} className='d-flex match-item align-center j-between'>
          <div className='d-flex match-item-date j-between align-center'>
            <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
            <div>AET</div>
            <div>
              <p>10/20/2024</p>
              <p>09:00</p>
            </div>
          </div>
          <div className='d-flex flex-column match-item-team'>
            <div className='d-flex j-between align-center'>
              <div>
                <img
                  className='team-mark-small'
                  src='https://lsm-static-prod.livescore.com/medium/enet/8633.png'
                />
                <span>Leral Madrid</span>
              </div>
            </div>
            <div className='d-flex j-between align-center'>
              <div>
                <img
                  className='team-mark-small'
                  src='https://lsm-static-prod.livescore.com/medium/enet/8633.png'
                />
                <span>Leral Madrid</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Matches
