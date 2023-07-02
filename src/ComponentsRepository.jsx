import {Card, CardContent, makeStyles} from '@mui/material'
import {styled as muiStyled} from '@mui/material/styles'
import styled from "styled-components";

export const CustomCardContent = muiStyled(CardContent)({
    height: '3em',
    maxWidth: '10em',
})

export const CustomCard = muiStyled(Card)(({theme}) => ({

    [theme.breakpoints.up('md')]: {
        minWidth: '15em',

    },
    minWidth: '5em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "yellow orange"
}))

export const Container = styled.div({
    margin : '2em'
});

//  export const useStyles = makeStyles({
//     root: {
//         minWidth: 275,
//         border: "1px solid",
//         padding: "10px",
//         boxShadow: "5px 10px red"
//     },
//
// })

