import React, {FC} from 'react';
import {
    AppBar,
    Box,
    Button, createTheme,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem, makeStyles,
    Toolbar,
    Typography, useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useTheme} from "@mui/material/styles";



const drawerWidth = 240;
const navItems = ['Home', 'Form', 'Table', 'Grid'];
const currentPage = window.location.pathname;

interface Props {
    window?: () => Window;
}

const AppBarComponent: FC<Props> = (props: Props) => {
    const theme = useTheme()
    const isSmScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'))
    const isMdScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'))
    const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'))
    const isExtraSmall = useMediaQuery(theme.breakpoints.down('sm'))



    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}} style={{zIndex : 1100}}>
            <Typography variant="h6" sx={{my: 2}}>
                MUI
            </Typography>
            <Divider/>
            <List>
                <ListItem sx={{textAlign: 'center'}}>
                    <Button sx={{
                        textAlign: 'center',
                        borderBottom: currentPage === '/' ? '2px solid red' : '2px solid transparent',
                        '&:hover, &:focus': {borderBottomColor: 'red'}
                    }} size='small' href='/'>home</Button>
                </ListItem>
                <ListItem>
                    <Button sx={{
                        textAlign: 'center',
                        borderBottom: currentPage === '/department-form' ? '2px solid red' : '2px solid transparent',
                        '&:hover, &:focus': {borderBottomColor: 'red'}
                    }} size='small' href='/department-form'>form</Button>
                </ListItem>

                <ListItem>
                    <Button sx={{
                        textAlign: 'center',
                        borderBottom: currentPage === '/department-table' ? '2px solid red' : '2px solid transparent',
                        '&:hover, &:focus': {borderBottomColor: 'red'}
                    }} size='small' href='/department-table'>table</Button>
                </ListItem>
                <ListItem>
                    <Button sx={{
                        textAlign: 'center',
                        borderBottom: currentPage === '/grid-card-form' ? '2px solid red' : '2px solid transparent',
                        '&:hover, &:focus': {borderBottomColor: 'red'}
                    }} size='small' href='/grid-card-form'>Grid</Button>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <>
            <AppBar component="nav" style={{zIndex : 1201, position : 'relative'}}>
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
                    <Box sx={{display: {xs: 'none', md: 'block'}}}>
                        <Button sx={{
                            color: '#fff',
                            borderBottom: currentPage === '/' ? '2px solid red' : '2px solid transparent',
                            '&:hover, &:focus': {borderBottomColor: 'red'}
                        }} href='/'>Home</Button>
                        <Button sx={{
                            color: '#fff',
                            borderBottom: currentPage === '/department-form' ? '2px solid red' : '2px solid transparent',
                            '&:hover, &:focus': {borderBottomColor: 'red'}
                        }} href='/department-form'>Form</Button>
                        <Button sx={{
                            color: '#fff',
                            borderBottom: currentPage === '/department-table' ? '2px solid red' : '2px solid transparent',
                            '&:hover, &:focus': {borderBottomColor: 'red'}
                        }} href='/department-table'>Table</Button>
                        <Button sx={{
                            color: '#fff',
                            borderBottom: currentPage === '/grid-card-form' ? '2px solid red' : '2px solid transparent',
                            '&:hover, &:focus': {borderBottomColor: 'red'}
                        }} href='/grid-card-form'>Grid</Button>
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