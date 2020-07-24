import React from "react";
import RootHomePresenter from "./RootHomePresenter";
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from '../../redux/User';

interface RootState {
    user: any
}
const RootHomeContainer: React.FunctionComponent = () => {
    const user = useSelector((state:RootState)=>state.user);
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const [id, setId] = React.useState('');
    const [pw, setPw] = React.useState('');

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const onChangeId = (e:any)=>{
        setId(e.target.value);
    };

    const onChangePassword = (e:any)=>{
        setPw(e.target.value);
    };

    const onSubmitForm = (e:any)=>{
        e.preventDefault();

        handleClose();
        const newUser = {
            id:1,
            name:'행정안전부'
        };
        //비동기 코드
        dispatch(loadUser(newUser));
    };

    return <RootHomePresenter user={user.user} id={id} pw = {pw} open={open} handleOpen={handleOpen} handleClose={handleClose} onChangeId={onChangeId} onChangePassword={onChangePassword} onSubmitForm={onSubmitForm}/>;
};

export default RootHomeContainer;