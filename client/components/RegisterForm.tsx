import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    && {
        margin-left: 15vh;
        margin-top: 5vh;
    }
`;

class LoginForm extends React.Component<any, any> {
    state = {
        username: '',
        password: '',
        email: '',
        errorMessage: '',
    };

    handleChange = name => e => {
        this.setState({
            [name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleRegisterSubmit(e, this.state);
    };

    render() {
        return (
            <Grid container spacing={24}>
                <StyledForm
                    noValidate
                    autoComplete="on"
                    onSubmit={this.handleSubmit}
                >
                    <Grid item xs={12}>
                        <TextField
                            id="username"
                            label="Username"
                            value={this.state.username}
                            onChange={this.handleChange('username')}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="password"
                            label="Password"
                            value={this.state.password}
                            type="password"
                            onChange={this.handleChange('password')}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            label="Email"
                            value={this.state.email}
                            type="email"
                            onChange={this.handleChange('email')}
                            margin="normal"
                        />
                    </Grid>
                    <Grid>
                        <Button type="submit">Click</Button>
                    </Grid>
                </StyledForm>
            </Grid>
        );
    }
}

export default LoginForm;