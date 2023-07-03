import {Card, CardContent, makeStyles} from '@mui/material'
import {styled as muiStyled} from '@mui/material/styles'
import styled from "styled-components";

export const CustomCardContent = muiStyled(CardContent)({
    height: '3em',
    maxWidth: '10em',
})

export const CustomCard = muiStyled(Card)(({theme}) => ({

    [theme.breakpoints.down('sm')]: {
        minWidth: '10em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "yellow orange",
        maxHeight : '10em'

    },
    minWidth: '5em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "yellow orange",
    height : '10em'
}))

export const Container = styled.div({
    margin : '2em'
});


