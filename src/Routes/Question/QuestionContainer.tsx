import React, { useEffect } from "react";
import QuestionPresenter from "./QuestionPresenter";
import axios from "axios";
import Cookie from "../Cookie";
import { RouteProps } from "react-router-dom";

interface RouteInfo extends RouteProps {
    params: {
        id: string;
    };
}
let ID = -1;
const request = async (id: string,setQuestions:any,questions:any) => {
    const res = await axios.get(`http://34.105.29.115:3000/forms/${id}`, {
        headers: {
            Authorization: "Bearer " + Cookie.LoginCookies.getLoginCookies(),
        },
    });
    setQuestions(res.data.requestForm);
    return res;
};
const modifyRequest = async (id: string,questions:any) => {
    const res = await axios.put(`http://34.105.29.115:3000/admin/forms/${id}`,{data:questions}, {
        headers: {
            Authorization: "Bearer " + Cookie.LoginCookies.getLoginCookies(),
        },
    });
    return res;
};
const QuestionContainer = ({ match }: { match: RouteInfo }) => {
    const [questions, setQuestions] = React.useState<any>([{questionid:0 as any, question:"" as string}]);

    const updateQuestion = (e:any, index:any) => {
        const nquestions = [...questions];
        nquestions[index].question = e.target.value;
        setQuestions(nquestions);
    };

    const deleteQuestion = (index:number) => {
        const nquestions = [...questions];
        nquestions.splice(index, 1);
        setQuestions(nquestions);
    };

    const addQuestion = () => {
        const prevID = ID;
        --ID;
        setQuestions([...questions, {questionid:prevID,question:""}]);
    };
 
    const submitQuestion = (e:any) => {
        e.preventDefault();
        // setQuestions((qObjs:any) => qObjs.filter((qObj:any) => {
        //     return qObj.question !== "";
        // }));
        modifyRequest(match.params.id,questions);
        alert("수정완료");
    }

    useEffect(() => {
        const res = request(match.params.id,setQuestions,questions);
        return () => {
        };
    }, []);
    return <QuestionPresenter questions={questions} deleteQuestion={deleteQuestion}
        updateQuestion={updateQuestion} addQuestion={addQuestion}
        submitQuestion={submitQuestion} />;
};

export default QuestionContainer;