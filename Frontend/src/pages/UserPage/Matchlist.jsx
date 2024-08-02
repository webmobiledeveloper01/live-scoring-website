import React, { useState } from 'react'
import MatchDetails from './MatchDetails'
import { useSelector } from 'react-redux'
import { Main } from '../../styled'

const Matchlist = ({ matchs, onMatchClick }) => {
  const [selectedMatch, setSelectedMatch] = useState(null)

  const matches = [
    {
      id: 1,
      time: "90+1'",
      team1: 'Stal Rzeszow',
      avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
      score1: 0,
      team2: 'Stal Mielec',
      events: [
        {
          time: "2'",
          team: 'Stal Mielec',
          player: 'I. Sapala',
          action: 'goal'
        },
        {
          time: "35'",
          team: 'Stal Rzeszow',
          player: 'A. Ramadani',
          action: 'yellow card'
        },
        {
          time: "2'",
          team: 'Stal Mielec',
          player: 'I. Sapala',
          action: 'goal'
        },
        {
          time: "35'",
          team: 'Stal Rzeszow',
          player: 'A. Ramadani',
          action: 'yellow card'
        }
        // Add more events as necessary
      ],
      score2: 5
    },
    {
      id: 2,
      time: "56'",
      team1: 'FK Radnicki 1923',
      avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
      score1: 4,
      team2: 'Mladost Lucani',
      events: [
        {
          time: "2'",
          team: 'Stal Mielec',
          player: 'I. Sapala',
          action: 'goal'
        },
        {
          time: "35'",
          team: 'Stal Rzeszow',
          player: 'A. Ramadani',
          action: 'yellow card'
        },
        {
          time: "2'",
          team: 'Stal Mielec',
          player: 'I. Sapala',
          action: 'goal'
        },
        {
          time: "35'",
          team: 'Stal Rzeszow',
          player: 'A. Ramadani',
          action: 'yellow card'
        }
        // Add more events as necessary
      ],
      score2: 0
    },
    {
      id: 3,
      time: "45'",
      team1: 'Magdeburg',
      score1: 1,
      team2: 'FC Zurich',
      avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
      events: [
        {
          time: "2'",
          team: 'Stal Mielec',
          player: 'I. Sapala',
          action: 'goal'
        },
        {
          time: "35'",
          team: 'Stal Rzeszow',
          player: 'A. Ramadani',
          action: 'yellow card'
        }
        // Add more events as necessary
      ],
      score2: 0
    },
    {
      id: 4,
      time: "42'",
      team1: 'Preston North End',
      score1: 0,
      team2: 'Lincoln City',
      avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
      events: [
        {
          time: "2'",
          team: 'Stal Mielec',
          player: 'I. Sapala',
          action: 'goal'
        },
        {
          time: "35'",
          team: 'Stal Rzeszow',
          player: 'A. Ramadani',
          action: 'yellow card'
        }
        // Add more events as necessary
      ],
      score2: 1
    },
    {
      id: 5,
      time: "45'",
      team1: 'Slovan Liberec',
      avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
      events: [
        {
          time: "2'",
          team: 'Stal Mielec',
          player: 'I. Sapala',
          action: 'goal'
        },
        {
          time: "35'",
          team: 'Stal Rzeszow',
          player: 'A. Ramadani',
          action: 'yellow card'
        }
        // Add more events as necessary
      ],
      score1: 0,
      team2: 'Puskas FC Academy',
      score2: 0
    }
  ]
  const open = useSelector(state => state.drawer.open)
  return (
    <>
      <Main open={open} className='mt-40'>
        {selectedMatch && (
          <div className='absolute h-full w-[96%] max-w7xl bgwhite flex justify-center items-center'>
            <MatchDetails
              match={selectedMatch}
              onMatchClick={setSelectedMatch}
            />
          </div>
        )}
        <div className='bg-[#041421] text-white p-4'>
          <div className='flex justify-between items-center mb-2'>
            {/* <div className='text-orange-500'>LIVE</div> */}
            <div className='text-lg'>Club Friendlies 2024</div>
            <div>
              <button className='text-white'>
                <i className='fas fa-calendar'></i>
              </button>
            </div>
          </div>
          <div className='grid grid-cols-5 text-center'></div>
          <div className='mt-2'>
            {matches.map(match => (
              <div
                key={match.id}
                className='flex justify-between items-center p border-b border-gray-700 cursor-pointer hover:bg-gray-800 p-10'
                onClick={() => setSelectedMatch(match)}
              >
                <div className='flex items-center justify-between w-[80%]'>
                  <div className='flex gap-3 items-center justify-start flexcol '>
                    <span className='text-orange-500 mr-2'>{match.time}</span>
                    <div className='flex gap-3 items-start justify-start flex-col '>
                      <div className='flex gap-3 items-center justify-between '>
                        <img
                          src={match.avatar}
                          style={{
                            width: '30px',
                            height: '30px'
                          }}
                        />
                        <div>{match.team1}</div>
                      </div>

                      <div className='flex gap-3 items-center justify-between '>
                        <img
                          src={match.avatar}
                          style={{
                            width: '30px',
                            height: '30px'
                          }}
                        />
                        <div>{match.team2}</div>
                      </div>
                    </div>
                  </div>

                  {/* <div className='text-gray-500'>vs</div> */}

                  <div className='flex gap-3 items-start justify-start flex-col '>
                    <div className='flex gap-3 items-center justify-between '>
                      <div>{match.score1}</div>
                    </div>
                    <div className='flex gap-3 items-center justify-between '>
                      <div>{match.score2}</div>
                    </div>
                  </div>
                </div>

                {/* <div></div>
              <div className='text-gray-500'>vs</div>
              <div></div>
              <button className='text-white'>
                <i className='fas fa-star'></i>
              </button> */}
              </div>
            ))}
          </div>
        </div>
      </Main>
    </>
  )
}

export default Matchlist
