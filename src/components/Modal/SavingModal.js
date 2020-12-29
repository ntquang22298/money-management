import React from 'react';
import { Modal, Form, Select, Input, Space, Button, InputNumber } from 'antd';
import header from '../../images/saving.png';
import { useDispatch } from 'react-redux';
import * as action from '../../actions/saving';
const { TextArea } = Input;
const tailLayout = {
  wrapperCol: { offset: 16, span: 16 },
};
const SavingModal = (props) => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    props.setVisible(false);
  };
  const handleSaving = (value) => {
    dispatch(action.createSaving(value));
    props.setVisible(false);
  };

  return (
    <div>
      <Modal centered visible={props.visible} closable={false}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img src={header} style={{ width: 300 }} loading='lazy' alt='saving' />
        </div>
        <Form layout='vertical' name='expenseForm' onFinish={handleSaving}>
          <Form.Item
            label='Source'
            name='source'
            rules={[
              {
                required: true,
                message: 'Please select source',
              },
            ]}
          >
            <Select placeholder='Source'>
              <Select.Option value='cash'>Cash</Select.Option>
              <Select.Option value='vcb'>VCB</Select.Option>
              <Select.Option value='bidv'>BIDV</Select.Option>
              <Select.Option value='agribank'>Agribank</Select.Option>
              <Select.Option value='momo'>Momo</Select.Option>
              <Select.Option value='airpay'>Airpay</Select.Option>
              <Select.Option value='zalopay'>Zalo pay</Select.Option>
              <Select.Option value='vnpay'>VNPAY Wallet</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label='Target'
            name='target'
            rules={[
              {
                required: true,
                message: 'Goal',
              },
            ]}
          >
            <Select placeholder='Type'>
              <Select.Option value='travel'>Macbook</Select.Option>
              <Select.Option value='vcb'>Da Nang Travel</Select.Option>
              <Select.Option value='bidv'>Wedding Rings</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label='Amount'
            name='amount'
            rules={[
              {
                required: true,
                message: 'Please enter amount',
              },
            ]}
          >
            <InputNumber
              placeholder='Amount'
              formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            />
          </Form.Item>
          <Form.Item label='Description' name='description'>
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button type='primary' htmlType='submit'>
                Spend
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default SavingModal;
