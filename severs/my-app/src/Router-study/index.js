/**
 * Created by Administrator on 2016/11/15.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory} from 'react-router';

const cup = React.createClass({
   render:function () {
       return(
           <div>cup
               {this.props.children}
           </div>
       )
   }
});

const beiju = React.createClass({
    render:function () {
        return(
            <div>beiju</div>
        )
    }
});

const beijuju = React.createClass({
    render:function () {
        return(
            <div>beijuju</div>
        )
    }
});

const R = React.createClass({
   render:function () {
       return(
           <Router history={hashHistory}>
               <Route path='/cup' component={cup}>
                   <Route path='/beiju' component={beiju}/>
                   <Route path='/beijuju' component={beijuju}/>
               </Route>
           </Router>
       )
   }
});



const RouterStudy = React.createClass({
    render:function(){
        return(
            <div>
                <h3>react-router</h3>
                <R/>
            </div>
        )
    }
});

export default RouterStudy;