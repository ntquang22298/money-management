import React from 'react';
import { Avatar, Typography, Space, Button } from 'antd';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const { Title, Text } = Typography;
const Profile = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('user');
    history.replace('/login');
  };
  return (
    <div className='profile'>
      <Space direction='vertical' align='center' size={15}>
        <Avatar size={100} icon={<FaUserCircle />} />
        <Title level={4}>Nguyen Tuan Quang</Title>
        <Text>ntquang22298@gmail.com</Text>
        <Button
          icon={<FaSignOutAlt />}
          style={{ background: '#000', color: '#fff' }}
          onClick={handleLogout}
        ></Button>
      </Space>
    </div>
  );
};
export default Profile;
