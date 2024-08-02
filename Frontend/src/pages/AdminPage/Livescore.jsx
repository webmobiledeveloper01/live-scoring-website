import React, { useState } from 'react'
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Checkbox,
  Button,
  Paper
} from '@mui/material'
import { Main } from '../../styled'
import { useSelector } from 'react-redux'

const Livescore = () => {
  const [teamStats, setTeamStats] = useState([
    {
      name: '',
      goalFor: 0,
      goalAgainst: 0,
      cleanSheet: false,
      yellowCard: 0,
      redCard: 0,
      points: 0
    },
    {
      name: '',
      goalFor: 0,
      goalAgainst: 0,
      cleanSheet: false,
      yellowCard: 0,
      redCard: 0,
      points: 0
    }
  ])

  const [playerStats, setPlayerStats] = useState([
    { name: '', team: '', goals: 0, assists: 0, yellowCard: 0, redCard: 0 }
  ])

  const handleTeamChange = (index, field, value) => {
    const newTeamStats = [...teamStats]
    newTeamStats[index][field] = value
    setTeamStats(newTeamStats)
  }

  const handlePlayerChange = (index, field, value) => {
    const newPlayerStats = [...playerStats]
    newPlayerStats[index][field] = value
    setPlayerStats(newPlayerStats)
  }

  const addPlayerRow = () => {
    setPlayerStats([
      ...playerStats,
      { name: '', team: '', goals: 0, assists: 0, yellowCard: 0, redCard: 0 }
    ])
  }

  const submitForms = () => {
    console.log('Team Data:', teamStats)
    console.log('Player Data:', playerStats)
    // Add your form submission logic here, e.g., using fetch to send the data to the server
  }

  const open = useSelector(state => state.drawer.open)

  return (
    <Main open={open}>
      <div className='!max-w-6xl !mx-auto mt-40'>
        <h1>Live Football Score Update</h1>

        <div className='team'>
          <h2 className='my-4'>Update Team Stats</h2>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Team</TableCell>
                  <TableCell>Goal For</TableCell>
                  <TableCell>Goal Against</TableCell>
                  <TableCell>Clean Sheet</TableCell>
                  <TableCell>Yellow Card</TableCell>
                  <TableCell>Red Card</TableCell>
                  <TableCell>Points</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teamStats.map((team, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <TextField
                        value={team.name}
                        onChange={e =>
                          handleTeamChange(index, 'name', e.target.value)
                        }
                        placeholder='Team Name'
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        type='number'
                        value={team.goalFor}
                        onChange={e =>
                          handleTeamChange(index, 'goalFor', e.target.value)
                        }
                        placeholder='0'
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        type='number'
                        value={team.goalAgainst}
                        onChange={e =>
                          handleTeamChange(index, 'goalAgainst', e.target.value)
                        }
                        placeholder='0'
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        checked={team.cleanSheet}
                        onChange={e =>
                          handleTeamChange(
                            index,
                            'cleanSheet',
                            e.target.checked
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        type='number'
                        value={team.yellowCard}
                        onChange={e =>
                          handleTeamChange(index, 'yellowCard', e.target.value)
                        }
                        placeholder='0'
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        type='number'
                        value={team.redCard}
                        onChange={e =>
                          handleTeamChange(index, 'redCard', e.target.value)
                        }
                        placeholder='0'
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        type='number'
                        value={team.points}
                        onChange={e =>
                          handleTeamChange(index, 'points', e.target.value)
                        }
                        placeholder='0'
                        fullWidth
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className='players'>
          <h2 className='my-4'>Update Player Stats</h2>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Player Name</TableCell>
                  <TableCell>Team</TableCell>
                  <TableCell>Goals</TableCell>
                  <TableCell>Assists</TableCell>
                  <TableCell>Yellow Card</TableCell>
                  <TableCell>Red Card</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {playerStats.map((player, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <TextField
                        value={player.name}
                        onChange={e =>
                          handlePlayerChange(index, 'name', e.target.value)
                        }
                        placeholder='Player Name'
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        value={player.team}
                        onChange={e =>
                          handlePlayerChange(index, 'team', e.target.value)
                        }
                        placeholder='Team Name'
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        type='number'
                        value={player.goals}
                        onChange={e =>
                          handlePlayerChange(index, 'goals', e.target.value)
                        }
                        placeholder='0'
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        type='number'
                        value={player.assists}
                        onChange={e =>
                          handlePlayerChange(index, 'assists', e.target.value)
                        }
                        placeholder='0'
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        type='number'
                        value={player.yellowCard}
                        onChange={e =>
                          handlePlayerChange(
                            index,
                            'yellowCard',
                            e.target.value
                          )
                        }
                        placeholder='0'
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        type='number'
                        value={player.redCard}
                        onChange={e =>
                          handlePlayerChange(index, 'redCard', e.target.value)
                        }
                        placeholder='0'
                        fullWidth
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div className='flex gap-8'>
            <Button
              variant='contained'
              color='primary'
              onClick={addPlayerRow}
              className='!mt-[20px]'
            >
              Add Player
            </Button>

            <Button
              variant='contained'
              color='primary'
              onClick={submitForms}
              className='!mt-[20px] !flex !justify-end !items-end !wfull'
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default Livescore
