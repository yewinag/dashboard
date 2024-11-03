import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';
const { Sider } = Layout;
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleMenu = (e: { key: string }) => {
    router.push(e.key);
  };
  return (
    <SiderLayout trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        onClick={handleMenu}
        items={[
          {
            key: '/',
            icon: <UserOutlined />,
            label: 'Dashboard',
          },
          {
            key: '/patients',
            icon: <VideoCameraOutlined />,
            label: 'Patients',
          },
          {
            key: '/admins',
            icon: <UploadOutlined />,
            label: 'Admins',
          },
        ]}
      />
    </SiderLayout>
  );
};
export default Sidebar;

const SiderLayout = styled(Sider)`
  .demo-logo-vertical {
    height: 64px;
    background: #fad;
    width: 100%;
  }
`;