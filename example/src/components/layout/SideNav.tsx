import React from 'react';
import { Layout, Menu } from 'antd';
import { FileMarkdownOutlined, CodeOutlined } from '@ant-design/icons';
import { useLocation, Link } from 'react-router-dom';
import type { CollapseType } from 'antd/lib/layout/Sider';
import { ReactComponent as ReactLogo } from '../assets/icons/react-logo.svg';

const { Sider } = Layout;

interface ISideNavProps {
    collapsed: boolean;
    onCollapse?: (collapsed: boolean, type: CollapseType) => void;
}

const SideNav = ({ collapsed, onCollapse }: ISideNavProps) => {
    const location = useLocation();

    return (
        <Sider
            theme='light'
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'sticky',
                top: 0,
                left: 0
            }}
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
        >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ReactLogo height='50px' width='100%' />
            </div>
            <Menu
                theme='light'
                mode='inline'
                defaultSelectedKeys={['/']}
                selectedKeys={[location.pathname]}
            >
                <Menu.Item key='/' icon={<FileMarkdownOutlined />}>
                    <Link to='/' />
                    Docs
                </Menu.Item>

                <Menu.Item key='/examples' icon={<CodeOutlined />}>
                    <Link to='/examples' />
                    Examples
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default SideNav;
