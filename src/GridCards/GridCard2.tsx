import React, {FC} from 'react';
import {Typography, useMediaQuery} from '@mui/material';
import{useTheme} from '@mui/material/styles'
import {CustomCard,CustomCardContent} from "../ComponentsRepository";


interface GridCardProps{
    title : string,
    content : string,
    number : number
}

const GridCard: FC<GridCardProps> = (props)  => {



    const theme = useTheme()
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const isMdScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'))
    const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'))

    return(
        <div>
            <CustomCard>
                <CustomCardContent>
                    <Typography fontSize={isMdScreen ? 14 : 8}  color="red" gutterBottom>
                        {props.title}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.content}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Number : {props.number}
                    </Typography>
                    <div style={{marginBottom:'5em'}}/>
                </CustomCardContent>
            </CustomCard>
        </div>
    )}

export default GridCard;
