import React, { useState } from 'react'

const MatchDetails = ({ match, onMatchClick }) => {
  const [selectedTab, setSelectedTab] = useState('Summary')

  if (!match) {
    return (
      <div className='bg-black text-white p-4'>
        Select a match to see details
      </div>
    )
  }

  const renderEvents = () => (
    <div>
      {match.events.map((event, index) => (
        <div
          key={index}
          className='flex items-center p-2 border-b border-gray-700'
        >
          <span className='mr-2'>{event.time}</span>
          <span className='mr-2'>{event.player}</span>
          {event.action === 'goal' && (
            <i className='fas fa-futbol text-yellow-500'></i>
          )}
          {event.action === 'yellow card' && (
            <i className='fas fa-square text-yellow-500'></i>
          )}
          {event.action === 'red card' && (
            <i className='fas fa-square text-red-500'></i>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <>
      <button
        className='text-[50px] absolute right-8 top-0 text-white cursor-pointer rotate-45'
        onClick={() => onMatchClick(null)}
      >
        +
      </button>

      <div className='bg-[#061727] text-white p-4 h-full w-full '>
        <div className='flex justify-between items-center mb-4'>
          <div>
            <h2 className='text-2xl'>
              {match.team1} <span className='text-lg'>vs</span> {match.team2}
            </h2>
            <p className='text-lg'>
              {match.score1} - {match.score2}
            </p>
            <p>Full Time</p>
          </div>
          <button className='text-white'>
            <i className='fas fa-calendar'></i>
          </button>
        </div>
        <div className='flex border-b border-gray-700 mb-4'>
          {['Info', 'Summary', 'Stats', 'Line-ups', 'H2H'].map(tab => (
            <button
              key={tab}
              className={`flex-1 p-2 ${
                selectedTab === tab
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : ''
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div>
          {selectedTab === 'Summary' && renderEvents()}
          {/* Add more tab content as needed */}
        </div>
      </div>
    </>
  )
}

export default MatchDetails
