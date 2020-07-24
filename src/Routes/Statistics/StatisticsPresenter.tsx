import React from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Line } from "react-chartjs-2";
const data = {
    labels: ["1시", "2시", "3시", "4시", "5시", "6시", "7시"],
    datasets: [
        {
            label: "통과",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "비통과",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(255, 99, 132)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(255, 99, 132)",
            pointHoverBorderColor: "rgb(255, 99, 132)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [4, 3, 3, 2, 1, 4, 1]
        }
    ]
};


const StatisticsPresenter: React.FunctionComponent = () => {

    return (
        <>
            <div>
                <Grid container spacing={5}>
                    <Grid item sm={12}>
                        <h2>현황통계</h2>
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
        </>
    );
};

export default StatisticsPresenter;