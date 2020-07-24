import React, { useRef,useEffect  } from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DoneIcon from '@material-ui/icons/Done';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

type gatewayProps = {
    accesslist: any,
    accessOne: any
};
const PassList = styled(List)`
    border: 1px solid #000000;
    right : 0%;
    max-height : 400px;
    overflow : auto;
`;
const PersonImg = styled.img`
    width : 250px;
    height : 250px;
`;
const Logo = styled.h1``;
const Container = styled(Grid)`
`;
const PassListGrid = styled(Grid)`

`;
const Header = styled(Grid)`
    margin-bottom : 5%;
    ${Logo}{
        margin-left: 5%;
    }
`;
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));
const GatewayPresenter = ({ accesslist, accessOne }: gatewayProps) => {
    const classes = useStyles();

    useEffect(() => {
        scrollToBottom();
        //
        return () => {
        };
    }, [accesslist]);

    //scroll
    const scrollRef = useRef<HTMLUListElement>(null);
	const scrollToBottom = () => {
        if(scrollRef.current !== null)
		    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    };
    //style

    //
    return (
        <>
            <Container container spacing={3} alignItems="center" alignContent="center">
                <Header item sm={12} xs={12}>
                    <Logo>수문장</Logo>
                </Header>

                <Grid item sm={1}>
                </Grid>
                <Grid item sm={3}>
                    <PersonImg src="https://www.hellot.net/admin/crosseditor_3.5.0.06/binary/images/000233/20200401090627856_O1KGUWBN.jpg"></PersonImg>
                </Grid>
                <Grid item sm={4}>
                    <h1>이름 : {accessOne.name}</h1>
                    <h1>방문시각 : {accessOne.date}</h1>
                    {accessOne.access === true ? <h1 style={{color:'blue'}}>방문 허가</h1> : <h1  style={{color:'red'}}>방문 불허</h1>}
                </Grid>
                <PassListGrid item sm={3} >
                    <h3>실시간 통과인원</h3>
                    <PassList className={classes.root} ref={scrollRef}>
                        {
                            accesslist.map((person: { access: boolean,name : string, date : string },idx:number)=>{
                                return (
                                    <ListItem key={idx}>
                                        <ListItemAvatar>
                                            {person.access===true 
                                                ? <DoneIcon color="primary"/>
                                                : <NotInterestedIcon color="secondary"/>
                                            }
                                        </ListItemAvatar>
                                        <ListItemText primary={person.name} secondary={person.date} />
                                    </ListItem>
                                )
                            })
                        }
                    </PassList>
                </PassListGrid>
                <Grid item sm={1}>
                </Grid>
            </Container>
        </>
    );
};

export default GatewayPresenter;