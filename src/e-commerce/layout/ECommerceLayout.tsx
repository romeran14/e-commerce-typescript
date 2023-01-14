import { Box } from '@mui/system'
import { NavBar } from '../components'
import { Outlet } from 'react-router-dom'

export const ECommerceLayout = () => {

  return (
    <Box>
      <NavBar />
     <Outlet/>
    </Box>
  )
}
