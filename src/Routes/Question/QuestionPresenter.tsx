import React from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
type QuestionProps = {
    questions: any,
    deleteQuestion: any,
    updateQuestion: any,
    addQuestion: any,
    submitQuestion: any
};
const Logo = styled.h1``;
const Container = styled(Grid)`
    padding-top : 2%;
`;
const Header = styled(Grid)`
    margin-bottom : 5%;
    ${Logo}{
        margin-left: 5%;
    }
`;
const QuestionGrid = styled(Grid)`
    // height : 700px;
    text-align : center;
`;
const PaperWrapper = styled(Paper)`
    height: 100%;
    width: 100%;
`;
const QuestionPresenter = ({ questions, deleteQuestion, updateQuestion, addQuestion, submitQuestion }: QuestionProps) => {
    console.log("In presenter",questions);
    return (
        <>
            <Container container spacing={2}>
                <Header item sm={12} xs={12}>
                    <Logo>수문장</Logo>
                </Header>
                <Grid item sm={3}>
                </Grid>
                <QuestionGrid item xs={12} sm={6}>
                    <Paper elevation={9}>
                        <form  onSubmit={submitQuestion}>
                            <h1>문진표 수정 </h1>
                            {
                                questions.map((question: any, index: number) => {
                                    return (
                                        <div key={question.questionid}>
                                            <TextField style={{ width: '70%' }} value={question.question} onChange={e => updateQuestion(e, index)} required={true} />
                                            <IconButton aria-label="delete" onClick={() => deleteQuestion(index)}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <br /><br />
                                        </div>
                                    );
                                })
                            }
                            <div>
                                <IconButton onClick={addQuestion}>
                                    <AddIcon /> 추가
                                                </IconButton>
                                <IconButton type="submit" >
                                    <CheckIcon /> 완료
                                </IconButton>
                            </div>
                        </form>
                        <br />
                    </Paper>
                </QuestionGrid>

                <Grid item sm={3} >
                </Grid>

            </Container>
        </>
    );
};

export default QuestionPresenter;