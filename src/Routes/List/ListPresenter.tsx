import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const rows = [
    { id: 0, name: '행정안전부', date: '16 Mar, 2019', visitors: 10000 },
    { id: 0, name: '행정안전부', date: '16 Mar, 2019', visitors: 10000 },
    { id: 0, name: '행정안전부', date: '16 Mar, 2019', visitors: 10000 },
    { id: 0, name: '행정안전부', date: '16 Mar, 2019', visitors: 10000 },
    { id: 0, name: '행정안전부', date: '16 Mar, 2019', visitors: 10000 },
    { id: 0, name: '행정안전부', date: '16 Mar, 2019', visitors: 10000 },
    { id: 0, name: '행정안전부', date: '16 Mar, 2019', visitors: 10000 },
    { id: 0, name: '행정안전부', date: '16 Mar, 2019', visitors: 10000 },
    { id: 0, name: '행정안전부', date: '16 Mar, 2019', visitors: 10000 },
    { id: 0, name: '행정안전부', date: '16 Mar, 2019', visitors: 10000 },
];

export default function ListPresenter() {
    const LinkWrapper = styled(Link)`
    text-decoration: none;
    `;
    return (
        <React.Fragment>

            <Grid container spacing={2} style={{marginTop:"100px"}}>
                <Grid item xs={2} sm={2}/>
                <Grid item xs={8} sm={8}>
                    <Typography component="h2" variant="h6" color="primary" gutterBottom style={{display:"inline"}}>
                        시설 리스트 
                    </Typography>
                    <LinkWrapper to={`/root/register`}>
                        <Button variant="outlined" color="primary" style={{float:"right"}}>시설등록</Button>
                    </LinkWrapper>
                    <Paper style={{marginTop:"30px"}} elevation={24}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>기관명</TableCell>
                                    <TableCell>등록 기간</TableCell>
                                    <TableCell>방문자수</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.date}</TableCell>
                                        <TableCell>{row.visitors}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
                <Grid item xs={2} sm={2}/>
            </Grid>

        </React.Fragment>
    );
}