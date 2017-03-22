import React, { Component } from 'react';
import styles from './app.css';
import { Link } from 'react-router';

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

    removeHash() {
    var scrollV, scrollH, loc = window.location;
    if ('replaceState' in history) {
        history.replaceState('', document.title, loc.pathname + loc.search);
    } else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        loc.hash = '';

        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
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
                    <button type='submit' className="btn btn-info">Create an Account</button>
                    <br/>
                    <button className="btn btn-info"><Link to='/profile'>Overide to Client Page</Link></button>
                    <br/>
                    <button className="btn btn-danger"><Link to="/api/user/login/facebook" onClick={this.removeHash}>Log in With Facebook</Link></button>
                    <br/>
                    <br/>
                    <Link to="/" >Back to Home</Link>
                </div>
            </div>
        )
    }
}

export default MainLogin;