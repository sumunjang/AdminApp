import React from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import mainImg from './img/main.jpg'
import IconButton from '@material-ui/core/IconButton';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';

const Login = styled(Button)``;
const UserName = styled.div``;
const Container = styled(Grid)`
    padding-top : 2%;
`;
const MainImg = styled.img`
    height: 100%;
    width: 100%;
`;
const LinkWrapper = styled(Link)`
    text-decoration: none;
`;
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        textAlign: 'center',
    },
}));
const RootHomePresenter = () => {
    const classes = useStyles();
    return (
        <>
            <Container container spacing={2}>
                <Grid item sm={3}>
                </Grid>
                <Grid container item sm={6} spacing={6} alignItems="center" alignContent="center">
                    <Grid item sm={12} xs={12} >
                        <div>
                            <MainImg src={mainImg} />
                            <h4 style={{ textAlign: "center" }}>정부인증 문진표 수문장 통합 관리시스템 ver 0.1</h4>
                        </div>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <LinkWrapper to="/root/list">
                            <IconButton color="primary" component="span" size="small">
                                <MeetingRoomIcon style={{ fontSize: 40 }} />
                                시설 리스트
                            </IconButton>
                        </LinkWrapper>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <LinkWrapper to="/root/register">
                            <IconButton color="primary" component="span" size="small">
                                <AssignmentIcon style={{ fontSize: 40 }} />
                                시설 등록
                            </IconButton>
                        </LinkWrapper>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <LinkWrapper to="/root/statistics">
                            <IconButton color="primary" component="span" size="small">
                                <InsertChartIcon style={{ fontSize: 40 }} />
                                시설 통계
                            </IconButton>
                        </LinkWrapper>
                    </Grid>
                </Grid>


                <Grid item sm={3} >
                </Grid>

            </Container>
        </>
    );
};

export default RootHomePresenter;