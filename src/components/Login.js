import React, { Component } from 'react';
import styles from './app.css';
import NavLink from './nav_link';

class MainLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange(username){
        console.log('input changed: ', username);
        this.setState({ username });
    }

    onSubmit(event){
        event.preventDefault();
        console.log(this.state);
        //ajax call here to retrieve info

    }

    render(){
        const { handleSubmit } = this.props;
        return (
            <div className = {styles.loginPage}>
                <h2>Login</h2>
                <div className = {styles.formDiv}>
                    <form onSubmit={(e) => this.onSubmit(e)}>
                        <br/>
                        <label htmlFor="username">Username:</label>
                        <input onChange={ event => this.handleChange(event.target.value)}
                               id="username"
                               type="text"/>
                        <br/>
                        <br/>
                        <label htmlFor="password"> Password: </label>
                        <input id="password" type="password"/>
                        <br/>
                        <br/>
                        <button type='submit' className="btn btn-info">Log in</button>
                    </form>

                    <br/>
                    <button className="btn btn-info"><NavLink to='/client_login_page'>Overide to Client Page</NavLink></button>
                    <br/>
                    <button className="btn btn-danger">Log in With Facebook</button>
                    <br/>
                    <br/>
                    <button className="btn btn-danger">Log in With Google</button>
                    <NavLink to="/" >Back to Home</NavLink>
                </div>
            </div>
        )
    }
}

export default MainLogin;