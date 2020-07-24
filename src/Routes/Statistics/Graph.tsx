// @flow 
import React from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import { Line } from "react-chartjs-2";

export const Graph = ({data,txt}:{data:any,txt:any}) => {
    return (
        <div>
            <Grid container spacing={5}>
                <Grid item sm={12}>
                    <h2>{txt}</h2>
                </Grid>
                <Grid item sm={3}>
                </Grid>
                <Grid item sm={6}>
                    <Line data={data} />
                </Grid>
                <Grid item sm={3} >
                </Grid>
            </Grid>
        </div>
    );
};