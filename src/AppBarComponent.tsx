import React, {FC, ReactElement} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Box, Button, Divider, List, ListItem, Drawer} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import styled from "styled-components";
import {hover} from "@testing-library/user-event/dist/hover";

const drawerWidth = 240;
const navItems = ['Home', 'Form', 'Table', 'Grid'];

interface Props {
    window?: () => Window;
}

const currentPage = window.location.pathname;


const AppBarComponent: FC<Props> = (props: Props) => {

    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                MUI
            </Typography>
            <Divider/>
            <List>
                <ListItem sx={{textAlign: 'center'}}>
                    <Button sx={{textAlign: 'center'}} size='small' href='/'>Home</Button>
                </ListItem>
                <ListItem>
                    <Button sx={{textAlign: 'center'}} size='small' href='/department-form'>Form</Button>
                </ListItem>

                <ListItem>
                    <Button size='small' href='/department-table'>Table</Button>
                </ListItem>
                <ListItem>
                    <Button size='small' href='/grid-card-form'>Grid</Button>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;



    const UnderlinedButton = styled(Button)`
  
      border-bottom: 2px solid #1976d2;

  &:hover {
    border-bottom: 1px solid #B73B3B;
    }
`;

    return (
       <>
           <AppBar component="nav">
               <Toolbar>
                   <IconButton
                       color="inherit"
                       aria-label="open drawer"
                       edge="start"
                       onClick={handleDrawerToggle}
                       sx={{mr: 2, display: {sm: 'none'}}}
                   >
                       <MenuIcon/>
                   </IconButton>
                   <Typography
                       variant="h6"
                       component="div"
                       sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                   >
                       MUI
                   </Typography>
                   <Box sx={{display: {xs: 'none', sm: 'block'}}}>

                       <UnderlinedButton
                           style={{
                               color: '#fff',
                           borderBottom : currentPage === '/'  ? '1px solid #B73B3B' : 'none',
                           }} href='/'


                       >
                           Home
                       </UnderlinedButton>

                       <UnderlinedButton
                           sx={{
                               color: '#fff',
                               borderBottom : currentPage === '/department-form'  ? '1px solid #B73B3B' : 'none',
                           }} href='/department-form'


                       >
                           Form
                       </UnderlinedButton>

                       <UnderlinedButton
                           sx={{
                               color: '#fff',
                               borderBottom : currentPage === '/department-table'  ? '1px solid #B73B3B' : 'none',
                           }} href='/department-table'


                       >
                           Table
                       </UnderlinedButton>

                       <UnderlinedButton
                           sx={{
                               color: '#fff',
                               borderBottom : currentPage === '/grid-card-form'  ? '1px solid #B73B3B' : 'none',
                           }} href='/grid-card-form'


                       >
                           Grid
                       </UnderlinedButton>

                   </Box>
               </Toolbar>
           </AppBar>

           <Box component="nav">
               <Drawer
                   container={container}
                   variant="temporary"
                   open={mobileOpen}
                   onClose={handleDrawerToggle}
                   ModalProps={{
                       keepMounted: true, // Better open performance on mobile.
                   }}
                   sx={{
                       display: {xs: 'block', sm: 'none'},
                       '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                   }}
               >
                   {drawer}
               </Drawer>
           </Box>
       </>
    );
}

export default AppBarComponent