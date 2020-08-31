import React from "react"
import ReactDOM from 'react-dom'

import './style.css'

function App(){
  return (
    <div className="App">
      爸爸
    <Son/>
    </div>
  )
}

class Son extends React.Component{
  constructor() {
    super();
    this.state = {
      n:0
    }
  }
  add(){

    // this.state.n+=1  Vue方法

    // this.setState({ n: this.state.n + 1 });
    // console.log(this.state.n)//n+1之前的数值

    this.setState((state)=>{
      return {n: state.n+1}
    })
  }
  render() {
    return (
      <div className='Son'>
        儿子 n:{this.state.n}
        <button onClick={()=>this.add()}>+1</button>
        <Grandson />
      </div>
    )
  }
}

const Grandson = ()=>{
  //const array = React.useState(0)
  //const n = array[0]
  //const setN = array[1]

  const [n,setN] = React.useState(0)
  return (
    <div className='Grandson'>
      孙子 n:{n}
      <button onClick={()=>setN(n+1)}>+1</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />,rootElement)