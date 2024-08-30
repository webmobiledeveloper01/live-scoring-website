import clsx from 'clsx'
import React from 'react'
import { useParams } from 'react-router-dom'
import Knockout from './Knockout'
import MatchPage from './MatchPage'
import OfficalPage from './OfficalPage'
import TeamPage from './TeamPage'
function TourManageDetail () {
  const menuLists = ['TEAMS', 'KNOCKOUT', 'MATCHES', 'OFFICAL TEAM']
  const [RenderPage, setRenderPage] = React.useState(<TeamPage></TeamPage>)
  const { key } = useParams()
  const [select, setSelect] = React.useState(0)

  React.useEffect(() => {
    switch (key) {
      case '':
        setRenderPage(<TeamPage></TeamPage>)
        break
      case 'match':
        setRenderPage(<MatchPage></MatchPage>)
        break
      case 'offical':
        setRenderPage(<OfficalPage></OfficalPage>)
        break

      default:
        break
    }
  }, [key])

  const handleMenu = (index, text) => {
    setSelect(index)
    console.log(index)
    switch (index) {
      case 0:
        setRenderPage(<TeamPage />)
        break
      case 1:
        setRenderPage(<Knockout />)
        break
      case 2:
        setRenderPage(<MatchPage />)
        break
      case 3:
        setRenderPage(<OfficalPage />)
        break
      default:
        break
    }
  }

  return (
    <>
      <div className='max-w-7xl mx-auto mt-4 pl20 max-md:p-4  max-sm:px-5'>
        <ul className='na main-navar flex gap-8  bg-[#061727] min-h-[64px] items-center overflow-x-auto '>
          {menuLists.map((item, index) => (
            <li className='nav-item p-4 flex-shrink-0' key={index}>
              <a
                className={clsx(
                  'nav-link cursor-pointer',
                  index == select && '!active !text-yellow-200'
                )}
                onClick={() => handleMenu(index, item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='main-body'>{RenderPage}</div>
    </>
  )
}

export default TourManageDetail
