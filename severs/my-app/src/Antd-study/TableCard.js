/**
 * Created by Administrator on 2016/11/12.
 */
import React from 'react';
import Card from './Card';

const TitleBar = Card.TitleBar;
const Title = Card.Title;
const ContentBar = Card.ContentBar;
const Content = Card.Content;


var TableCard = React.createClass({
    getInitialState(){
        return{
            current:1
        }
    },
    render:function () {
        return(
            <div>
                <Card current={this.state.current}>
                    <TitleBar>
                        <Title index={1} onClick={(e)=>this.setState({current:1})}>1111</Title>
                        <Title index={2} onClick={(e)=>this.setState({current:2})}>2222</Title>
                        <Title index={3} onClick={(e)=>this.setState({current:3})}>3333</Title>
                    </TitleBar>
                    <ContentBar>
                        <Content index={1}>11</Content>
                        <Content index={2}>22</Content>
                        <Content index={3}>33</Content>
                    </ContentBar>
                </Card>
            </div>
        )
    }

});

export default TableCard;
