import React from "react";
import Button from "../../common/Button";

const Wellcome = () => {
  return (
    <>
      <div className="wellcome">
        <div className="wellcome__inner container">
          <div className="wellcome__col">
            <h2 className="wellcome__title">Завітайте у музей</h2>
            <Button className="wellcome__button" line color="accent" textColor="black">
              Придбати квитки
            </Button>
          </div>
          <div className="wellcome__col">
            <div className="wellcome__item">
              <a className="wellcome__text" href="#">
                Київ, провулок Хоріва, 1,
              </a>
              <span className="wellcome__text" href="#">
                Метро "Контрактова площа"
              </span>
              <a className="wellcome__text" href="#">
                тел. +38 044 482-56-27
              </a>
            </div>
            <div className="wellcome__item">
              <span className="wellcome__text" href="#">
                Понеділок – Субота
              </span>
              <span className="wellcome__text" href="#">
                10:00 – 18.00 (каса до 17.00)
              </span>
            </div>
          </div>
          <div className="wellcome__col">
            <div className="wellcome__item">
              <span className="wellcome__text" href="#">
                Школярі, студенти – 12 грн
              </span>
              <span className="wellcome__text" href="#">
                Дорослі – 24 грн
              </span>
              <span className="wellcome__text" href="#">
                Пільгові категорії – 0 грн
              </span>
            </div>
            <div className="wellcome__item">
              <a className="wellcome__text wellcome__text--accent" href="#">
                Як дістатися?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wellcome;
