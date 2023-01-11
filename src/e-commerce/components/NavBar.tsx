import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { handleDrawerToggle } from "../../store/ui/uiSlice";

export const NavBar = () => {
  //Variables
  const { mobileOpen } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();
  const drawerWidth = 240;
  const navItems = ["Example#1", "Example#2", "Example#3", "Example#4"];

  //Funciones
  const handleDrawer = () => {
    dispatch(handleDrawerToggle());
  };

  //Jsx Element

  const drawer = (
    <Box onClick={handleDrawer} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        E-Commerce
      </Typography>
      <Divider />
      <List>
        {navItems.map((menuItem, key) => (
          <ListItem key={key} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={menuItem} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawer}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Example
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <List sx={{ display: "flex" }}>
              {navItems.map((menuItem, key) => (
                <ListItem key={key} disablePadding>
                  <ListItemButton sx={{ textAlign:'center'}}>
                    <ListItemText primary={menuItem} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawer}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
