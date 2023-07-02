import React, {FC} from 'react';
import {Typography, useMediaQuery} from '@mui/material';
import{useTheme} from '@mui/material/styles'
import {CustomCard, CustomCardContent} from "../ComponentsRepository";





interface GridCardProps{
    title : string,
    content : string,
    number : number
}

const GridCard1: FC<GridCardProps> = (props)  => {



    const theme = useTheme()
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const isMdScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'))
    const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'))

    return(
        <div>
            <CustomCard>
                <CustomCardContent>
                    <Typography fontSize={isSmScreen ? 4 :isMdScreen ? 8 : 14}  color={isSmScreen ? "red":isMdScreen ? "blue" : "orange"} gutterBottom>
                        {props.title}
                    </Typography>
                    <Typography fontSize={isSmScreen ? 4 :isMdScreen ? 8 : 14} color={isSmScreen ? "red":isMdScreen ? "blue" : "orange"} gutterBottom>
                        {props.content}
                    </Typography>
                    <Typography fontSize={isSmScreen ? 4 :isMdScreen ? 8 : 14} color={isSmScreen ? "red":isMdScreen ? "blue" : "orange"} gutterBottom>
                        Number : {props.number}
                    </Typography>
                    <div style={{marginBottom:'2em'}}/>
                </CustomCardContent>
            </CustomCard>

        </div>
    )}

export default GridCard1;
