import React,{useReducer} from "react";
import GatewayPresenter from "./GatewayPresenter";
import openSocket from "socket.io-client";
import axios from "axios";
import { RouteProps } from "react-router-dom";

const dummy = {
    name : "김명호", 
    date : "2020-07-16",
    access : true
};

const listDummy = [
    {
        name : "이상준", 
        date : "2020-07-16",
        access : false
    },
    {
        name : "이상호", 
        date : "2020-07-16",
        access : true
    },
    {
        name : "김명호", 
        date : "2020-07-16",
        access : true
    },
];
interface RouteInfo extends RouteProps {
    params: {
        id: string;
      };
}
const GatewayContainer = ({ match }: { match: RouteInfo }) => {
    const id = match.params.id;
    const [accesslist, setAlist] = useReducer((accesslist:any, { type, value }:{type:any,value:any}) => {
        switch (type) {
          case "init":
              return listDummy;
          case "add":
            return [...accesslist, value];
          default:
            return accesslist;
        }
      }, []);
    const [accessOne, setAone] = useReducer((accessOne:any, { type, value }:{type:any,value:any}) => {
        switch (type) {
          case "init":
              return dummy;
          case "update":
            return value;
          default:
            return accessOne;
        }
      }, []);
    const addList = (data:any)=>{
        setAlist({ type: "add", value: data});
        setAone({type:"update",value: data});
    };
    React.useEffect(() => {
        setAone({type:"init",value:dummy});
        setAlist({ type: "init", value: null});
        const socket = openSocket("http://34.105.29.115:3000/",{ transports: ['websocket'],reconnection:true,reconnectionAttempts:10 });
        socket.emit('register',id);
        socket.on("listenServer", addList);
        return () => {
          socket.removeAllListeners();
        };
      }, []);
    return <GatewayPresenter accesslist={accesslist} accessOne={accessOne}/>;
};

export default GatewayContainer;