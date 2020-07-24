import React, {useEffect, useState} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home";
import Login from "./components/Authentication/Login";
import Logout from "./components/Authentication/Logout";
import Register from "./components/Authentication/Register";
import Form from "./components/Form/Form";
import NotFound from "./components/NotFound";
import firebase from "firebase";
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);

function App() {
    const [user, setUser] = useState("");

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            user? setUser(user.email): setUser(null)
        })
    },[]);

    const handleCheckLogin = () => {

        return (user != null) ?
            <Router>
                <Switch>
                    <Route exact path="/"
                           render={(props) => (
                               <Home {...props} user={user}/>
                           )}
                    />
                    <Route path="/logowanie"
                           render={(props) => (
                               <Login {...props} user={user}/>
                           )}
                    />
                    <Route path="/rejestracja"
                           render={(props) => (
                               <Register {...props} user={user}/>
                           )}
                    />
                    <Route path="/oddaj-rzeczy"
                           render={(props) => (
                               <Form {...props} user={user}/>
                           )}
                    />
                    <Route path="/wylogowano" component={Logout}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
            : <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/logowanie"
                           render={(props) => (
                               <Login {...props} user={user}/>
                           )}
                    />
                    <Route path="/rejestracja"
                           render={(props) => (
                               <Register {...props} user={user}/>
                           )}
                    />
                    <Route path="/wylogowano" component={Logout}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
    };


    return (
        <>
            {handleCheckLogin()}
        </>
    )

}

export default App;
