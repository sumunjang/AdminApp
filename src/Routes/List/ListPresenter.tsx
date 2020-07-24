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

export default function ListPresenter({list}:{list:any}) {
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
                                    <TableCell><strong>기관 번호</strong></TableCell>
                                    <TableCell><strong>기관 명</strong></TableCell>
                                    <TableCell><strong>기관 주소</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {list.map((e:any,idx:any) => (
                                    <TableRow key={idx}>
                                        <TableCell>{e.placeid}</TableCell>
                                        <TableCell>{e.placename}</TableCell>
                                        <TableCell>{e.address}</TableCell>
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