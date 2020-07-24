import React,{useRef} from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import mainImg from './img/main.jpg'
import IconButton from '@material-ui/core/IconButton';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import CameraIcon from '@material-ui/icons/Camera';
import QRCode from 'qrcode.react';
import Paper from '@material-ui/core/Paper';

type AdminProps = {
    id: String;
    pw: String;
    open: boolean;
    user: any;
    qrHandle: any;
    handleOpen: () => void;
    handleClose: () => void;
    onChangeId: (e: any) => void;
    onChangePassword: (e: any) => void;
    onSubmitForm: (e: any) => void;
};
const QRcode = styled(QRCode)`
    // margin-left: 38px;
    // margin-top: 38px;
`;
const Login = styled(Button)``;
const UserName = styled.div``;
const Container = styled(Grid)`
    padding-top : 2%;
`;
const MainImg = styled.img`
    height: 100%;
    width: 100%;
`;
const Header = styled(Grid)`
  ${Login}{
        float: right;
        margin-right: 5%;
  }
  ${UserName}{
        float: right;
        margin-right: 5%;
        color:#3f51b5;
  }
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
const AdminHomePresenter = ({ user, id, pw, open, qrHandle, handleOpen, handleClose, onSubmitForm, onChangePassword, onChangeId }: AdminProps) => {
    const classes = useStyles();
    const qr = useRef() as any;
    const downloadQR = () => {
        const canvas = document.getElementById("qrcode") as any;
        const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        qr.current.href = pngUrl;
        qr.current.download = "시설_QR코드.png";
        qr.current.click();
      };
    const downloadAQR = () => {
        const canvas = document.getElementById("qrcode") as any;
        const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        qr.current.href = pngUrl;
        qr.current.download = "시설_QR코드.png";
      };
    return (
        <>
            <Container container spacing={2}>
                <Header item sm={12} xs={12}>
                    {user.id === null ?
                        <Login variant="outlined" color="primary" onClick={handleOpen}>로그인</Login>
                        :
                        <UserName>반갑습니다! {user.name} 관리자님.</UserName>
                    }
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <form className={classes.paper} onSubmit={onSubmitForm}>
                                <TextField onChange={onChangeId} value={id} required id="standard-required" label="아이디" defaultValue="" />
                                <br />
                                <TextField onChange={onChangePassword} value={pw} required id="standard-required" label="비밀번호" defaultValue="" />
                                <br />
                                <br />
                                <Button type="submit" variant="outlined" color="primary" > 로그인 </Button>
                            </form>
                        </Fade>
                    </Modal>
                </Header>

                <Grid item sm={3}>
                </Grid>
                <Grid container item sm={6} spacing={6} alignItems="center" alignContent="center">
                    <Grid item sm={12} xs={12} >
                        <div>
                            <MainImg src={mainImg} />
                            <h4 style={{ textAlign: "center" }}>정부인증 문진표 수문장 시설 관리시스템 ver 0.1</h4>
                        </div>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <LinkWrapper to={`/admin/${user.id}/gateway`}>
                            <IconButton color="primary" component="span" size="small">
                                <MeetingRoomIcon style={{ fontSize: 40 }} />
                                게이트 현황
                            </IconButton>
                        </LinkWrapper>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <LinkWrapper to={`/admin/${user.id}/question`}>
                            <IconButton color="primary" component="span" size="small">
                                <AssignmentIcon style={{ fontSize: 40 }} />
                                문진표 수정
                            </IconButton>
                        </LinkWrapper>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <IconButton color="primary" component="span" size="small"  onClick={qrHandle.handleQRopen}>
                            <CameraIcon style={{ fontSize: 40 }} />
                                QR 코드
                        </IconButton>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={qrHandle.qrOpen}
                            onClose={qrHandle.handleQRclose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={qrHandle.qrOpen}>
                                <Paper elevation={3} style={{height : "200px",width : "200px",textAlign:"center"}} >
                                    <a style={{color:"blue",textDecoration: "none" ,display:"block",marginTop : "25px",marginBottom:"10px", fontSize: "14px"}} ref={qr} onClick={downloadAQR}> QR코드를 클릭해 다운받기 </a>
                                    <QRcode id="qrcode" value={`http://34.105.29.115:3000/forms/${user.id}`} onClick={downloadQR} style={{cursor:"pointer"}}/>
                                </Paper>
                            </Fade>
                        </Modal>
                    </Grid>
                </Grid>


                <Grid item sm={3} >
                </Grid>

            </Container>
        </>
    );
};

export default AdminHomePresenter;