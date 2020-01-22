import React, {Component} from 'react';
import Button from "./components/Button";
import './css/style.css'

class Calculator extends Component {
constructor(props) {
    super(props);
    this.state = {
        current: '',
        previous:[],
        nextReset:false
    }
  }


reset = () => {
    this.setState({current : '', previous: []})
}
addToCurrent = (symbol) => {
if(["/","*","+","-"].indexOf(symbol) > -1){
        let previous = [];
        previous = [this.state];
        previous.push(this.state.current + symbol);
        this.setState({previous: previous, nextReset : true});
}else{
    if((this.state.current === "0" && symbol !== ".") || this.state.nextReset){
            this.setState({current: symbol, nextReset:false});
    }else{
        this.setState({current: this.state.current + symbol});    
         }
    }
    
    //o indexOf busca o os elementos citados no array e retorna -1 se não for encontrado
}
calculate = (symbol) =>{
    let {current, previous, nextReset} = this.state;
    if (previous.length > 0){
        current = eval(String(previous[previous.length -1] + current));
        this.setState({previous, current, nextReset: true})
    }

}


    render(){
        const buttons = [
            {symbol: "C", colunas: 3, action: this.reset},
            {symbol: "/", colunas: 1, action: this.addToCurrent},
            {symbol: "7", colunas: 1, action: this.addToCurrent},
            {symbol: "8", colunas: 1, action: this.addToCurrent},
            {symbol: "9", colunas: 1, action: this.addToCurrent},
            {symbol: "*", colunas: 1, action: this.addToCurrent},
            {symbol: "4", colunas: 1, action: this.addToCurrent},
            {symbol: "5", colunas: 1, action: this.addToCurrent},
            {symbol: "6", colunas: 1, action: this.addToCurrent},
            {symbol: "-", colunas: 1, action: this.addToCurrent},
            {symbol: "1", colunas: 1, action: this.addToCurrent},
            {symbol: "2", colunas: 1, action: this.addToCurrent},
            {symbol: "3", colunas: 1, action: this.addToCurrent},
            {symbol: "+", colunas: 1, action: this.addToCurrent},
            {symbol: "0", colunas: 2, action: this.addToCurrent}, 
            {symbol: ".", colunas: 1, action: this.addToCurrent},
            {symbol: "=", colunas: 1, action: this.calculate}      
            
            
           
            
        ];

        return(
        <div className="Calculator">
            {
                this.state.previous.length > 0 ?
                <div className="lastField">{this.state.previous[this.state.previous.length - 1] }</div>
                :null
            }
            <input className="result" type="text" defaultValue={this.state.current}></input>
            {
                buttons.map((btn, i) => {
                   return <Button key ={i}
                   symbol={btn.symbol} 
                   colunas={btn.colunas} 
                   action ={(symbol) => btn.action(symbol)} />
                })
            }
        </div>
        )
        // acima o ele faz um map nos objetos da constante buttons e retorna cada objeto para o componente renderizar como um props
    }

}
export default Calculator;