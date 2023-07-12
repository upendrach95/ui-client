import * as React from 'react';
import {FC} from 'react';
import {
    Button,
    CardActions,
    CardContent,
    CssBaseline,
    Grid,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';
import {Container, CustomCard, CustomCardContent} from "./ComponentsRepository";
import logo from './logo.svg'


interface Props {
    window?: () => Window;
    URL: string
}

const Cards: FC<Props> = (props) => {
    const theme = useTheme()
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const isMdScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'))
    const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'))
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'))


    return (
        <>
            <Container >
                <CssBaseline/>
                <Toolbar/>
                <Grid container justifyContent="flex-start" spacing={4}>
                    <Grid item>
                        <Grid container  justifyContent="space-between" direction={isSmScreen ? 'column-reverse' : 'row'} spacing={2}>
                            <Grid item sx={{flexGrow: 1, flexBasis: '25%'}} marginTop={isSmScreen ? '10em' : 'none'}>
                                <Typography>
                                    ReactJS is widely used in the development of single-page applications (SPAs) and
                                    is a core technology in many web development frameworks and libraries.
                                    It provides a powerful and flexible foundation for building modern, interactive,
                                    and efficient user interfaces.
                                </Typography>
                            </Grid>

                            <Grid item sx={{flexGrow: 1, flexBasis: '25%', minWidth : '10em' , minHeight :'10em'}} >
                                <img src={logo} alt="img"/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>




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