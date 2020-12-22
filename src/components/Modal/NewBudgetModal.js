import React from 'react';
import { Modal, Form, Input, Space, Button } from 'antd';
import budget from '../../images/budget.png';

const NewBudgetModal = (props) => {
  const handleCancel = () => {
    props.setVisible(false);
  };
  const handleTransfer = () => {
    props.setVisible(false);
  };
  return (
    <div>
      <Modal visible={props.visible} closable={false}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img src={budget} style={{ width: 450 }} />
        </div>
        <Form layout='vertical'>
          <Form.Item label='Type'>
            <Input />
          </Form.Item>
          <Form.Item label='Budget'>
            <Input />
          </Form.Item>
          <Form.Item>
            <Space style={{ float: 'right' }}>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button type='primary' onClick={handleTransfer}>
                Create
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default NewBudgetModal;
