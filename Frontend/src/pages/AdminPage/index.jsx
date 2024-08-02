import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Main, DrawerHeader } from '../../styled'
// import TourManage from './TourManage'
import TourManageDetail from './TourManageDetail'
import TeamManage from './TeamManage'
import CustomBreadcrumbs from '../../components/CustomBreadcrumbs'
import { setBreadCrumbs } from '../../redux/actions'
import TournamentManagement from './TourManage'

var linkFlag = true
function AdminPage () {
  const [RenderPage, setRenderPage] = React.useState(
    <TournamentManagement></TournamentManagement>
  )
  const { key } = useParams()
  const dispatch = useDispatch()
  const breadcrumbs = useSelector(state => state.breadcrumbs)

  React.useEffect(() => {
    if (linkFlag == true) {
      dispatch(setBreadCrumbs('set', { icon: '', text: '' }))
      linkFlag = false
    }
    switch (key) {
      case 'tournament':
        setRenderPage(<TournamentManagement></TournamentManagement>)
        break
      case 'tournamentDetail':
        setRenderPage(<TourManageDetail></TourManageDetail>)
        break
      case 'teammanage':
        setRenderPage(<TeamManage></TeamManage>)
        break

      default:
        break
    }
  }, [key])

  const open = useSelector(state => state.drawer.open)

  return (
    <Main open={open}>
      <DrawerHeader />
      {/* <CustomBreadcrumbs data={breadcrumbs} /> */}
      {RenderPage}
    </Main>
  )
}

export default AdminPage
