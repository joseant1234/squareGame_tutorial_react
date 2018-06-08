import React from 'react';

function Square(props){
  return(
    // no se pone props.onClick(), pues sino la llamaría de inmediato en lugar de pasarla
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default class Board extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  renderSquare(i){
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}/>
    );
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  render(){
    const status = 'Next player: X';

    return(
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }

}
