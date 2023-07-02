import * as React from 'react';
import {FC} from "react";
import {Card, CardActions, CardContent, Button, Typography, Grid, useTheme, useMediaQuery} from '@mui/material';
import {Container, CustomCard, CustomCardContent} from "./ComponentsRepository";


const Cards: FC = () => {
    const theme = useTheme()
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const isMdScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'))
    const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'))

    return (
        <Container>
            <Grid container justifyContent='flex-start' spacing={isMdScreen ? 2 : 4}
                  direction={isSmScreen ? 'column' : 'row'}>
                <Grid item sx= {{flexGrow: 1 , flexBasis: '25%'}}>
                    {/*<Card variant='outlined'  style={{width: '15em'}}>*/}
                    <CustomCard>
                        <CustomCardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                check the beautiful Add department form
                            </Typography>
                        </CustomCardContent>
                        <CardActions>
                            <Button size={isLgScreen ? 'medium' : 'small' } variant='outlined' href='/department-form'>Go to Form</Button>
                        </CardActions>
                    </CustomCard>
                    {/*</Card>*/}
                </Grid>
                <Grid item sx= {{flexGrow: 1 , flexBasis: '25%'}}>
                    {/*<Card variant='outlined'  style={{width: '15em'}}>*/}
                    <CustomCard>
                        <CardContent style={{height: '3em'}}>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                check the beautiful Table
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size={isLgScreen ? 'medium' : 'small' } variant='outlined' href='/department-table'>Go to Table</Button>
                        </CardActions>
                    </CustomCard>
                    {/*</Card>*/}
                </Grid>
                <Grid  item  sx= {{flexGrow: 1 , flexBasis: '25%'}}>
                    <CustomCard>
                        <CustomCardContent style={{height: '3em'}}>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
    )
}
export default Cards