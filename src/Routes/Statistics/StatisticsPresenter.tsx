import React from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import QRCode from 'qrcode.react';


const StatisticsPresenter: React.FunctionComponent = () => {

    return (
        <>

            <div>
                <Grid container spacing={5}>
                    <Grid item sm={12}>
                        <h2>QR코드</h2>
                    </Grid>
                    <Grid item sm={3}>
                    </Grid>
                    <Grid item sm={6}>
                        <QRCode value="www.naver.com"/>
                    </Grid>
                    <Grid item sm={3} >
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default StatisticsPresenter;