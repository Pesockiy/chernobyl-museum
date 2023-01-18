import React from "react";
import { Formik, Form } from "formik";

import Checkbox from "../../common/Checkbox";
import Line from "../../common/Line";
import Button from "../../common/Button";
import ProgressBar from "../ProgressBar";

const questions = [
  {
    question:
      "В якому році Чорнобильську атомну електростанцію було запущено в експлуатацію?",
    variants: [1977, 1970, 1986, 1979],
    answer: 1979,
  },
];

const Quiz = () => {
  console.log(questions);
  return (
    <div className="quiz">
      <div className="quiz__inner container">
        <div className="quiz__question-screen question-screen">
          <h3 className="question-screen__title">Запитання 1</h3>

          <Line className="question-screen__line" />

          <p className="question-screen__text">
            В якому році Чорнобильську атомну електростанцію було запущено в
            експлуатацію?
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
              {questions[0].variants?.map((variant, i) => (
                <Checkbox
                  key={variant}
                  classNames="question-screen__checkbox"
                  label={`в ${variant} році`}
                  name={variant}
                  id={variant}
                />
              ))}
            </Form>
          </Formik>
        </div>

        <div className="quiz__progress">
          <h2 className="quiz__title">ЩО ВИ ЗНАЄТЕ ПРО ЧОРНОБИЛЬ?</h2>
          <Line className="" />
          <div className="quiz__text">Пройдено питань</div>
          <ProgressBar className="quiz__progress" value="10" line />
          <Button className="quiz__button" line>Наступне питання</Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
