import * as React from 'react';
import {FC} from "react";
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Grid,
    useTheme,
    useMediaQuery,
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar} from '@mui/material';
import {Container, CustomCard, CustomCardContent} from "./ComponentsRepository";
import logo from './logo.svg'
import MenuIcon from '@mui/icons-material/Menu';


const drawerWidth = 240;
const navItems = ['Home', 'Form', 'Table','Grid'];

interface Props {
    window ? : () =>  Window;
    URL : string
}

const Cards:FC<Props> = (props) => {
    const theme = useTheme()
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const isMdScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'))
    const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'))

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
                <ListItem sx={{ textAlign: 'center' }}>
                    <Button sx={{ textAlign: 'center' }} size='small'  href='/'>Home</Button>
                </ListItem>
                <ListItem>
                    <Button sx={{ textAlign: 'center' }} size='small'  href='/department-form'>Form</Button>
                </ListItem>

                <ListItem>
                    <Button size='small'  href='/department-table'>Table</Button>
                </ListItem>
                <ListItem>
                    <Button size='small'  href='/grid-card-form'>Grid</Button>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <>
            <Container>

                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar component="nav">
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                MUI
                            </Typography>
                        <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                            <Button sx={{ color: '#fff' }}  href='/' >Home</Button>
                            <Button sx={{ color: '#fff' }}  href='/department-form' >Form</Button>
                            <Button sx={{ color: '#fff' }}  href='/department-table' >Table</Button>
                            <Button sx={{ color: '#fff' }}  href='/grid-card-form' >Grid</Button>
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
                <Box component="main" sx={{p: 3}}>
                    <Toolbar/>
                    <Grid container justifyContent='flex-start'>
                        <Grid item>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
                        fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
                        aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
                        cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
                        at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
                        Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
                        numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
                        asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
                        assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
                        soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
                        ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
                        soluta, aliquam fugit qui iste architecto perspiciatis.
                    </Typography>
                        </Grid>
                        <Grid item sx={{flexGrow: 1 , flexBasis: '25%'}} maxWidth="10em" maxHeight="10em" alignItems="center">
                            <img src ={logo} alt = "img" />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            </Container>

            <Container>
                <Grid container justifyContent='flex-start' spacing={isMdScreen ? 2 : 4}
                      direction={isSmScreen ? 'column' : 'row'}>
                    <Grid item sx={{flexGrow: 1, flexBasis: '25%'}}>
                        {/*<Card variant='outlined'  style={{width: '15em'}}>*/}
                        <CustomCard>
                            <CustomCardContent>
                                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                    Add department form
                                </Typography>
                            </CustomCardContent>
                            <CardActions>
                                <Button size={isLgScreen ? 'medium' : 'small'} variant='outlined'
                                        href='/department-form'>Go to Form</Button>
                            </CardActions>
                        </CustomCard>
                        {/*</Card>*/}
                    </Grid>
                    <Grid item sx={{flexGrow: 1, flexBasis: '25%'}}>
                        {/*<Card variant='outlined'  style={{width: '15em'}}>*/}
                        <CustomCard>
                            <CardContent style={{height: '3em'}}>
                                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                    check the beautiful Table
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size={isLgScreen ? 'medium' : 'small'} variant='outlined'
                                        href='/department-table'>Go to Table</Button>
                            </CardActions>
                        </CustomCard>
                        {/*</Card>*/}
                    </Grid>
                    <Grid item sx={{flexGrow: 1, flexBasis: '25%'}}>
                        <CustomCard>
                            <CustomCardContent style={{height: '3em'}}>
                                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                    Check the grid example
                                </Typography>
                            </CustomCardContent>
                            <CardActions>
                                <Button size="small" variant='outlined' href='/grid-card-form'>Go to Grid</Button>
                            </CardActions>
                        </CustomCard>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}


export default Cards