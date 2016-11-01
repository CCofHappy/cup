import React, { Component } from 'react';
import request from 'superagent';
import PartOne from './PartOne/PartOne';
import PartTwo from './PartTwo/PartTwo';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//           hello!world!
//           <PartOne/>
//           <PartTwo/>
//       </div>
//     );
//   }
// }

var App = React.createClass({
    render:function () {
        return(
            <div className="App">
                hello!world!
                <PartOne/>
                <PartTwo/>
            </div>
        );
    },
    componentDidMount:function () {
        request
            .get('http://101.200.129.112:9527/react1/student/')
            .end(function (err,res) {
                console.log(res);
            })
    }
})

export default App;
