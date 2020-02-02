import React from "react";
import firebase from 'firebase/app'
import {Selects} from 'queryfire'
import {BrowserRouter, Route} from 'react-router-dom'
import {Main} from './Main'
import _ from 'lodash';


export default class ShoppingList extends React.Component {

 async componentDidMount () {  

   initialise()

   var Users = await Selects("users");
   var refine = _.filter(Users , { 'age': 18 });
   console.log (refine);

	}

  render() {
    return (
        <BrowserRouter>     
      <div className="App">      

        <Route exact path="/" component = {Main}  />

          {/*   <Route  exact path="/Profile/:id"  render = {(props)=>  <Profile {...props} /> } />   */}

          {/*   <Route  exact path="/Feed/:id"     render = {(props)=>  <Feed {...props} /> }    />   */}

          {/*   <Route  exact path="/Groups/:id"   render = {(props)=>  <Groups {...props} /> }  />   */}

          // Recieve id in Component

          //  var Data = this.props.match ; var params = Data.params;  var Routeid = params.id;


      </div>
      </BrowserRouter>
    );
  }
}


const initialise = () => {

    var firebaseConfig = {
    apiKey: "AIzaSyDbLaZK1MOemuxlb9FmAxGoqOs_VjoufkE",
    authDomain: "kidgames-spaceship.firebaseapp.com",
    databaseURL: "https://kidgames-spaceship.firebaseio.com",                
    projectId: "kidgames-spaceship",
    storageBucket: "kidgames-spaceship.appspot.com",
    messagingSenderId: "155419873905",
    appId: "1:155419873905:web:b8f90ef9d96e883cee01d0",
    measurementId: "G-4SWLB829QJ"
  }
  firebase.initializeApp(firebaseConfig);


}

var JsonArray = []