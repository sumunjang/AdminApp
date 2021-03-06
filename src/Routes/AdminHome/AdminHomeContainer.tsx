import React,{useEffect} from "react";
import AdminHomePresenter from "./AdminHomePresenter";
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from '../../redux/User';
import axios from "axios";
import Cookie from "../Cookie";

interface RootState {
    user: any
}
const request = async (id:string,pw:string)=>{
    try{
        const res:{placeId:string,username:string,token:string} = await axios.post("http://34.105.29.115:3000/auth/signin/",{userid:id,password:pw});
        return res;
    }
    catch(e){
        alert("ID, PW를 확인해주세요.");
        return null;
    }
}
const profileRequest= async (token:string)=>{
    const res = await axios.get(`http://34.105.29.115:3000/profile`, {
        headers: {
            Authorization: "Bearer " + token,
        },
    });
    console.log(res);
    const newUser = {
        id:res.data.placeId,
        name:res.data.username,
    };
    return newUser;
}
const AdminHomeContainer: React.FunctionComponent = () => {
    const user = useSelector((state:RootState)=>state.user);
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const [qrOpen, setQRopen] = React.useState(false);
    const [id, setId] = React.useState('');
    const [pw, setPw] = React.useState('');

    useEffect(() => {
        // const token = Cookie.LoginCookies.getLoginCookies() as any;
        // console.log(token);
        // if(token!==undefined){
        //     const res = profileRequest(token) as any;
        //     dispatch(loadUser(res));
        // }
        return () => {
        };
    }, []);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleQRopen = () => {
        setQRopen(true);
    };
    const handleQRclose = () => {
        setQRopen(false);
    };
   
    const qrHandle={
        qrOpen,handleQRopen,handleQRclose
    };
    
    const onChangeId = (e:any)=>{
        setId(e.target.value);
    };
    const onChangePassword = (e:any)=>{
        setPw(e.target.value);
    };

    const onSubmitForm = async (e:any)=>{
        e.preventDefault();
        let res:any = null;
        res = await request(id,pw);
        if(res!==null){
            const newUser = {
                id:res.data.placeId,
                name:res.data.username,
            };
            dispatch(loadUser(newUser));
            Cookie.LoginCookies.setLoginCookies(res.data.token);
            handleClose();
        }
    };

    return <AdminHomePresenter user={user.user} id={id} pw = {pw} qrHandle={qrHandle} open={open} handleOpen={handleOpen} handleClose={handleClose} onChangeId={onChangeId} onChangePassword={onChangePassword} onSubmitForm={onSubmitForm}/>;
};

export default AdminHomeContainer;