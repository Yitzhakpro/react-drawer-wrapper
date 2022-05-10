import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { SideNav, DocsPage, Examples, FooterBar } from './components';
import 'react-drawer-wrapper/dist/index.css';
import 'antd/dist/antd.css';

const { Content } = Layout;

const App = () => {
    const [sideMenuCollapsed, setSideMenuCollapsed] = useState(false);

    const handleSideMenuOnCollapse = (collapsed: boolean) => {
        setSideMenuCollapsed(collapsed);
    };

    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <SideNav collapsed={sideMenuCollapsed} onCollapse={handleSideMenuOnCollapse} />
                <Layout>
                    <Content>
                        <Switch>
                            <Route exact path='/' component={DocsPage} />
                            <Route path='/examples' component={Examples} />
                        </Switch>
                    </Content>
                    <FooterBar />
                </Layout>
            </Layout>
        </Router>
    );
};

export default App;
