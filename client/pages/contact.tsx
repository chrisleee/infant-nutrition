import TextField from 'material-ui/TextField';
import withRedux from 'next-redux-wrapper';
import * as React from 'react';
import { compose } from 'redux';
import styled from 'styled-components';

import Layout from '../components/Layout';
import { initStore } from '../store';
import theme from '../utils//styles/mui-theme';
import withAuth, { PUBLIC } from '../utils/auth/withAuth';
import withRoot from '../utils/material-ui/withRoot';

const Container = styled.div`
    padding-top: 30px;
    flex: 1 0 100%;
    display: flex;
    flex-wrap: wrap;
`;

const StyledTextField = styled(TextField)`
    && {
        width: 48px;
        height: 48px;
        border-radius: 4;
        background-color: ${theme.palette.common.white};
        border: 1px solid #ced4da;
        font-size: 16;
        padding: 10px 12px;
        width: calc(100% - 24px);
        border-color: #80bdff;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
`;

class Contact extends React.Component<{}, {}> {
    render() {
        return (
            <Layout title="Submit">
                <Container>
                    <StyledTextField
                        defaultValue="Ask a question!"
                        label="Submit Questions Here"
                        id="submit-questions"
                        InputProps={{
                            disableUnderline: true,
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Container>
            </Layout>
        );
    }
}

export default compose<any>(
    withRoot(),
    withRedux(initStore),
    withAuth([PUBLIC]),
)(Contact);
