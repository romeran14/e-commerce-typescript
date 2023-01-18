import { Box } from '@mui/system'
import { NavBar } from '../components'
import { Outlet } from 'react-router-dom'
import { useChecking } from '../../hooks/useChecking';
import { LoginPage } from '../../auth/pages/LoginPage';
export const ECommerceLayout = () => {

  return (
    <Box>
      <NavBar />
     <Outlet/>
    </Box>
  )
}
