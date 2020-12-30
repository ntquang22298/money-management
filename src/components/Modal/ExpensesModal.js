import React from 'react';
import { Modal, Form, Select, Input, Space, Button, InputNumber } from 'antd';
import header from '../../images/expenses.png';
import { useDispatch } from 'react-redux';
import * as action from '../../actions/expenses';
const { TextArea } = Input;
const tailLayout = {
  wrapperCol: { offset: 16, span: 16 },
};
const ExpensesModal = (props) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const handleCancel = () => {
    props.setVisible(false);
  };
  const handleExpense = async (value) => {
    await dispatch(action.createExpense(value));
    props.setVisible(false);
    form.resetFields();
  };

  return (
    <div>
      <Modal centered visible={props.visible} closable={false}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img src={header} style={{ width: 500 }} loading='lazy' alt='expenses' />
        </div>
        <Form layout='vertical' name='expenseForm' onFinish={handleExpense} form={form}>
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
            label='Type'
            name='expenseType'
            rules={[
              {
                required: true,
                message: 'Please select type',
              },
            ]}
          >
            <Select placeholder='Type'>
              <Select.Option value='travel'>Travel</Select.Option>
              <Select.Option value='food'>Food</Select.Option>
              <Select.Option value='home'>Home</Select.Option>
              <Select.Option value='shopping'>Shopping</Select.Option>
              <Select.Option value='entertainment'>Entertainment</Select.Option>
              <Select.Option value='other'>Other</Select.Option>
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
export default ExpensesModal;
