import React, {Component} from 'react';

class Timer extends Component{

    constructor(props){
        super(props);
        this.state ={
           count: 0,
           buttonLabel: 'Go' 
        }
        this.myInterval = null;
    }

    go = () => {
        let state = this.state;
        if(this.myInterval !== null){
            clearInterval(this.myInterval);
            this.myInterval = null;
            state.buttonLabel = 'GO'
        }else{
            this.myInterval = setInterval(()=>{
                state.count += 0.1;
                this.setState(state);
            },100)
            state.buttonLabel = 'PAUSE';
        }
    }

    clean = () => {
        clearInterval(this.myInterval);
        this.myInterval = null;
        this.setState({buttonLabel: 'GO'});
        this.setState({count: 0})
    }

    render(){
        return(
            <div className="container">
                <img src={require('../assets/cronometro.png')} className="image" alt="cronometro"/>
                <span className="timer">{this.state.count.toFixed(1)}</span>
                <div className="areaBtn">
                <span className="botao" onClick={this.go}>{this.state.buttonLabel}</span>
                <span className="botao" onClick={this.clean}>Limpar</span>
                </div>
            </div>
        )
    }
}

export default Timer;