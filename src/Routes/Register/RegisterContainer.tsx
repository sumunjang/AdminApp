import React from "react";
import RegisterPresenter from "./RegisterPresenter";
import axios from "axios";
import { useHistory } from "react-router-dom";

const request = async (id:string,pw:string,name:string,addr:string,history:any)=>{
    const res = await axios.post("http://34.105.29.115:3000/places/register/",{userid:id,password:pw,placeName:name,address:addr});
    history.push("/root");
}
const RegisterContainer: React.FunctionComponent = () => {
    const [id,setId] = React.useState('');
    const [pw,setPw] = React.useState('');
    const [addr,setAddr] = React.useState('');
    const [name,setName] = React.useState('');
    const history = useHistory();

    const onChangeId = (e:any)=>{
        setId(e.target.value);
    };

    const onChangePassword = (e:any)=>{
        setPw(e.target.value);
    };

    const onChangeName = (e:any)=>{
        setName(e.target.value);
    };
    const onChangeAddr = (e:any)=>{
        setAddr(e.target.value);
    };

    const onSubmitForm = (e:any)=>{
        e.preventDefault();
        request(id,pw,name,addr,history);
    };


    return <RegisterPresenter addr={addr} name={name} id={id} pw = {pw} onChangeAddr={onChangeAddr} onChangeName={onChangeName} onChangeId={onChangeId} onChangePassword={onChangePassword} onSubmitForm={onSubmitForm}/>;
};

export default RegisterContainer;