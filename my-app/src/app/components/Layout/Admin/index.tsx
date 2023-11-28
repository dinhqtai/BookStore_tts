import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import HeaderAdmin from './headerAdmin';
import { HomeOutlined } from '@ant-design/icons';
import Link from 'next/link';
type Props = {
    children: React.ReactNode
}
const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Trang chủ', '1', <Link href="/admin/"><HomeOutlined width={10} /> </Link>,),
    getItem('Quản lý sách', '2', <Link href="/admin/qlSach"><img src="/qlphim.png" alt="" width={10} /> </Link>,),
    getItem('Quản lý thể loại', '3', <Link href="/admin/qlTheLoai"><img src="/qlsc.png" alt="" width={10} /> </Link>),
    getItem('Quản lý tác giả', '4', <Link href="/admin/qlTacGia"><img src="/qlkh.png" alt="" width={10} /></Link >),
];

const AdminLayout: React.FC<Props> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <div>
            <HeaderAdmin />
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }} />
                    <Content style={{ margin: '0 10px' }}>
                        <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                            {children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default AdminLayout;