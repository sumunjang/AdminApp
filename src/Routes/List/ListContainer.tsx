import React, { useEffect } from "react";
import ListPresenter from "./ListPresenter";
import axios from "axios";
import { RouteProps } from "react-router-dom";

interface RouteInfo extends RouteProps {
    params: {
        id: string;
    };
}
const request = async (setList:any) => {
    const res = await axios.get(`http://34.105.29.115:3000/places/`, {
    });
    setList(res.data);
    return res;
};
const ListContainer = ({ match }: { match: RouteInfo }) => {
    const [list,setList] = React.useState<any>([]);

    useEffect(() => {
        const res = request(setList);
        return () => {
        };
    }, [])
    return <ListPresenter list={list} />;
};

export default ListContainer;