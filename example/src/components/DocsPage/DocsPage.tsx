import React from 'react';
import { WarningOutlined } from '@ant-design/icons';

const DocsPage = () => {
    return (
        <div
            style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1>Under Construction</h1>
            <WarningOutlined
                style={{
                    fontSize: '16px',
                    marginLeft: '5px',
                    marginBottom: '5px',
                    color: 'orange'
                }}
            />
        </div>
    );
};

export default DocsPage;
