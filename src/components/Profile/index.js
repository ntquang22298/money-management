import React from 'react';
import { Avatar, Typography, Space } from 'antd';
import { FaUserCircle } from 'react-icons/fa';

const { Title, Text } = Typography;
const Profile = () => {
  return (
    <div className='profile'>
      <Space direction='vertical' align='center' size={15}>
        <Avatar size={100} icon={<FaUserCircle />} />
        <Title level={4}>Nguyen Tuan Quang</Title>
        <Text>ntquang22298@gmail.com</Text>
      </Space>
    </div>
  );
};
export default Profile;
