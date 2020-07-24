import React, { useEffect } from "react";
import QuestionPresenter from "./QuestionPresenter";
import axios from "axios";
import Cookie from "../Cookie";
import { RouteProps } from "react-router-dom";
const dummy = [
    "2주간 찜질방 방문여부",
    "해외여행 여부",
] as any;
interface RouteInfo extends RouteProps {
    params: {
        id: string;
    };
}
const request = async (id: string,setQuestions:any) => {
    const res = await axios.get(`http://localhost:4000/forms/${id}`, {
        headers: {
            Authorization: "Bearer " + Cookie.LoginCookies.getLoginCookies(),
        },
    });
    console.log(res);
    setQuestions(res.data.requestForm);
    return res;
};
const QuestionContainer = ({ match }: { match: RouteInfo }) => {
    const [questions, setQuestions] = React.useState<string[]>([]);

    const deleteQuestion = (target: string) => {
        setQuestions(questions => questions.filter(question => {
            return question !== target;
        }));
    }

    const updateQuestion = (e: any) => {
        e.preventDefault();
        const newQ = questions.map((question) => {
            if (question === e.target.id) {
                return e.target.value;
            }
            else return question;
        }) as never[];
        setQuestions(newQ);
    }
    const addQuestion = () => {
        let newVal = "";
        setQuestions([
            ...questions,
            ""
        ]);
    }
    const submitQuestion = () => {
        setQuestions(questions => questions.filter(question => {
            return question !== "";
        }));
        alert("수정완료");
    }

    useEffect(() => {
        const res = request(match.params.id,setQuestions);
        return () => {
        };
    }, []);
    return <QuestionPresenter questions={questions} deleteQuestion={deleteQuestion}
        updateQuestion={updateQuestion} addQuestion={addQuestion}
        submitQuestion={submitQuestion} />;
};

export default QuestionContainer;