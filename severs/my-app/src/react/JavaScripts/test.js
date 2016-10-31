/**
 * Created by Administrator on 2016/10/19.
 */
var friends = [
    {
        name:'东风谷早苗',
        type:'人类'
    },
    {
        name:'博丽灵梦',
        type:'人类'
    },
    {
        name:'伊吹萃香',
        type:'鬼'
    },
    {
        name:'比那名居天子',
        type:'天人'
    },
    {
        name:'雾雨魔理沙',
        type:'人类'
    }
];

var Friend = React.createClass({
    render:function () {
        var nums = this.props.list.map(function (project,i) {
            return(
                <li key={i}>
                    <span>名字：{project.name}</span><br/>
                    <span>种族：{project.type}</span>
                    <br/><br/>
                </li>
            )
        });
        return(
            <ul>
                {nums}
            </ul>
        )}
});

var Action = React.createClass({
    render:function () {
       return(
           <div>
               <span>名字： </span><input value={this.props.name} onChange={this.props.changeName}/><br/><br/>
               <span>种族： </span><input value={this.props.type} onChange={this.props.changeType}/><br/><br/>
               <button onClick={this.props.handleAdd}>增加</button>
           </div>
       )
    }
})

var App = React.createClass({
    getInitialState:function(){
        return{
            friends:friends,
            name:"",
            type:""
        }
    },
    render:function () {
        return(
            <div>
                <p>东方project</p>
                <Friend list={this.state.friends}/>
                <Action name={this.state.name} type={this.state.type} changeName={this.changeName} changeType={this.changeType} handleAdd={this.handleAdd}/>

            </div>
        )
    },
    changeName:function (e) {
        this.setState({
            name:e.target.value
        })
    },
    changeType:function (e) {
        this.setState({
            type:e.target.value
        })
    },
    handleAdd:function () {
        var friends = this.state.friends;
        var newFriend = {
            name:this.state.name,
            type:this.state.type
        }
        friends.push(newFriend);
        this.setState({
            friends:friends
        });
    }
});


ReactDOM.render(<App name="cup"/>,document.getElementById('root'));