import React, { useEffect } from "react";
import ListPresenter from "./ListPresenter";
import axios from "axios";
import Cookie from "../Cookie";
import { RouteProps } from "react-router-dom";

interface RouteInfo extends RouteProps {
    params: {
        id: string;
    };
}

const ListContainer = ({ match }: { match: RouteInfo }) => {
    useEffect(() => {
    }, [])
    return <ListPresenter />;
};

export default ListContainer;