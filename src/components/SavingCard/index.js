import React from 'react';
import { Row, Col, Progress } from 'antd';
const SavingCard = (props) => {
  return (
    <div className='saving-card' style={{ background: props.background }}>
      <Row>
        <Col xs={6}>
          <img src={props.src} />
        </Col>
        <Col xs={18}>
          <p className='title'>{props.title}</p>
        </Col>

        <p className='amount' style={{ color: props.color }}>
          {props.amount}
        </p>
      </Row>
      <Row>
        <Progress percent={props.percent} strokeColor='#fff' trailColor={props.progressColor} />
      </Row>
    </div>
  );
};
export default SavingCard;
