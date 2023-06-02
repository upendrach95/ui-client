import * as React from 'react';
import {FC} from "react";
import {Card,CardActions, CardContent,Button, Typography, Grid} from '@mui/material';


const Cards: FC = () => {
    return (
        <div style={{margin: 20}}>
            <Grid container spacing={2} direction='row'>
                <Grid item>
                    <Card variant='outlined'>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                check the beautiful Add user form
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant='outlined' href='/department-form'>Go to Form</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <div>second item</div>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards