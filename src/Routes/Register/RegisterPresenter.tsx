import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
type RegisterProps = {
    id: String;
    pw: String;
    name: String;
    addr:String;
    onChangeId: (e: any) => void;
    onChangePassword: (e: any) => void;
    onChangeName: (e: any) => void;
    onChangeAddr: (e: any) => void;
    onSubmitForm: (e: any) => void;
};
 const RegisterPresenter = ({ name, id, pw,addr, onSubmitForm, onChangePassword, onChangeId,onChangeName,onChangeAddr }: RegisterProps)=> {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" style={{marginTop:'170px'}}>
            <CssBaseline />
            <div className={classes.paper}>
                
                <Typography component="h1" variant="h5">
                인증 시설 등록 <LockOutlinedIcon />

                </Typography>
                <form className={classes.form} noValidate onSubmit={onSubmitForm}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                autoComplete="fname"
                                name="id"
                                variant="outlined"
                                required
                                fullWidth
                                id="id"
                                label="시설 아이디"
                                value={id}
                                onChange={onChangeId}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="비밀번호"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={pw}
                                onChange={onChangePassword}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="시설 이름"
                                name="name"
                                autoComplete="name"
                                value={name}
                                onChange={onChangeName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="addr"
                                label="시설 주소"
                                name="addr"
                                autoComplete="addr"
                                value={addr}
                                onChange={onChangeAddr}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        시설등록
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default RegisterPresenter;