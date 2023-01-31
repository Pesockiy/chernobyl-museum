import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { incrementStage, addAsk } from "../../store/quizSlice";

import Checkbox from "../../common/Checkbox";
import Line from "../../common/Line";
import Button from "../../common/Button";
import ProgressBar from "../ProgressBar";

const Quiz = () => {
  const stage = useSelector((state) => state.quiz.stage);
  const questions = useSelector((state) => state.quiz.questions);
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(
    Array(questions.length).fill(false)
  );

  const increeseHanlde = () => dispatch(incrementStage());
  const addingAsk = (id) => dispatch(addAsk(id));

  const asks = useSelector((state) => state.quiz.asks);

  return (
    <div className="quiz">
      <div className="quiz__inner container">
        {stage !== questions.length && (
          <>
            <div className="quiz__question-screen question-screen">
              <h3 className="question-screen__title">Запитання {stage + 1}</h3>

              <Line className="question-screen__line" />
              <p className="question-screen__text">
                {questions[stage].question}
              </p>

              <Formik
                initialValues={{
                  email: "",
                  color: "red",
                  firstName: "",
                  lastName: "",
                }}
              >
                <Form className="question-screen__variants">
                  {questions[stage].variants?.map((variant, i) => (
                    <Checkbox
                      key={variant}
                      classNames="question-screen__checkbox"
                      label={`в ${variant} році`}
                      name={variant}
                      id={variant}
                      checked={isChecked[i]}
                      onChange={() => {
                        setIsChecked([...isChecked].filter((e) => e.i));
                        addingAsk(variant);
                      }}
                    />
                  ))}
                </Form>
              </Formik>
            </div>

            <div className="quiz__progress">
              <h2 className="quiz__title">ЩО ВИ ЗНАЄТЕ ПРО ЧОРНОБИЛЬ?</h2>
              <Line className="" />
              <div className="quiz__text">Пройдено питань</div>
              <ProgressBar
                className="quiz__progress"
                value={stage === 0 ? 0 : (stage / questions.length) * 100}
                line
              />
              <Button textColor="white" onClick={increeseHanlde} className="quiz__button" line>
                Наступне питання
              </Button>
            </div>
          </>
        )}
        {stage === questions.length && (
          <>
            <div className="quiz__question-screen question-screen">
              <h3 className="question-screen__title">усі тести пройдені</h3>

              <Line className="question-screen__line" />

              <div style={{ marginBottom: "30px" }}>
                {asks.length && asks.map((ask) => <span>{ask} </span>)}
              </div>

              <Button onClick={() => {}} className="quiz__button" line>
                дізнатись правильні відповіді
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
