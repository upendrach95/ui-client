import React, {FC} from 'react';
import {Grid, useMediaQuery} from '@mui/material';
import {useTheme} from '@mui/material/styles'
import GridCard1 from "./GridCards/GridCard1";
import GridCard2 from "./GridCards/GridCard2";
import GridCard3 from "./GridCards/GridCard3";

interface UserProps {
    URL: string
}

const GridCardForm: FC<UserProps> = (props) => {


    const theme = useTheme()
    const isSmScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'))
    const isMdScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'))
    const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'))
    const isExtraSmall = useMediaQuery(theme.breakpoints.down('sm'))


    return (
        <>
            <Grid container spacing={2} bgcolor={isSmScreen ? "lightgreen" : isMdScreen ? "orange" : "yellow"}>

                <Grid item sx={{flexGrow: 1}}>
                    <h2>1st row</h2>
                </Grid>
                <Grid item sx={{flexGrow: 1}} >
                    <GridCard1 title="" content="First row, first card" number={1}/>
                </Grid>
                <Grid item sx={{flexGrow: 1}}>
                    <GridCard1 title="" content="First row, second card" number={2}/>
                </Grid>
                <Grid item sx={{flexGrow: 1}}>
                    <GridCard1 title="" content="First row, third card" number={3}/>
                </Grid>
                <Grid item sx={{flexGrow: 1}}>
                    <GridCard1 title="" content="First row, fourth card" number={4}/>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                    <Grid item sx={{flexGrow: 1}}>
                        <h2>2nd row</h2>
                    </Grid>
                    {(isExtraSmall || isSmScreen || isMdScreen || isLgScreen) &&
                        <Grid item sx={{flexGrow: 1}}>
                            <GridCard2 title="2nd row" content="Extra small device" number={1}/>
                        </Grid>

                    }
                    {(isSmScreen || isMdScreen || isLgScreen) &&
                        <Grid item sx={{flexGrow: 1}}>
                            <GridCard2 title="2nd row" content="Mobile" number={2}/>
                        </Grid>

                    }
                    {(isMdScreen || isLgScreen) &&
                        <Grid item sx={{flexGrow: 1}}>
                            <GridCard2 title="2nd row" content="Tablet" number={3}/>
                        </Grid>

                    }
                    {(isLgScreen) &&
                        <Grid item sx={{flexGrow: 1}}>
                            <GridCard2 title="2nd row" content="Desktop" number={4}/>
                        </Grid>

                    }

            </Grid>

            <Grid container  spacing={2} style={{backgroundColor: 'greenyellow', marginLeft: '0em'}}>
                    <Grid item sx={{flexGrow: 1}}>
                        <h2>3rd row</h2>
                    </Grid>
                    <Grid item sx={{flexGrow: 1}}>
                        <GridCard3 title="3rd row" content="Third row first card" number={1}/>
                    </Grid>
                    <Grid item sx={{flexGrow: 1}}>
                        <Grid container>
                            <Grid item>
                                <GridCard3 title="3rd row" content="Third row second card" number={2}/>
                            </Grid>
                            <Grid item sx={{flexGrow: 1}}>
                                <GridCard3 title="3rd row" content="Third row third card" number={3}/>
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>
            </>
            )
            }


            export default GridCardForm;