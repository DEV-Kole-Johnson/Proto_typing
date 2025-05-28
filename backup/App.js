can you turn this code fom react to react native

import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import { useState } from "react";

import { styles } from '../Proto_typing/styles';


function Square({value, onSquareClick}) {
 return (
 
 
 {value}
 
 

 );
}


export default function App() { 
 const [history, setHistory] = useState([Array(9).fill(null)]);
 const [currentMove, setCurrentMove] = useState(0);
 const xIsNext = currentMove % 2 === 0;
 const currentSquares = history[currentMove];

 function handlePlay(nextSquares) {
 const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
 setHistory(nextHistory);
 setCurrentMove(nextHistory.length - 1);
 }

 function jumpTo(nextMove) {
 setCurrentMove(nextMove);
 }

 const moves = history.map((squares, move) => {
 let description;
 if (move > 0) {
 description = 'Go to move #' + move;
 } else {
 description = 'Go to game start';
 }
 return (
 <li>
 jumpTo(move)}>{description}
 </li>
 );
 });

 function Board({xIsNext, squares, onPlay}) {
 function handleClick(i) {
 if (calculateWinner(squares) || squares[i]) {
 return;
 }
 const nextSquares = squares.slice();
 if (xIsNext) {
 nextSquares[i] = "X";
 } else {
 nextSquares[i] = "O";
 }
 onPlay(nextSquares);
 }

 const winner = calculateWinner(squares);
 let status;
 if (winner) {
 status = "Winner: " + winner;
 } else {
 status = "Next player: " + (xIsNext ? "X" : "O");
 }

 const boardSize = 3; 
 const rows = [];

 for (let row = 0; row < boardSize; row++) {
 const squaresInRow = [];
 for (let col = 0; col < boardSize; col++) {
 const index = row * boardSize + col;
 squaresInRow.push(
 handleClick(index)}
 />
 );
 }
 rows.push(
 
 {squaresInRow}
 
 );
 }

 return (
 <>
 {status}
 {rows}

 );
 }


 return (
 <>
 
 Open up App.js to start working on your app!

 <ol>{moves}</ol>
 );
}

function calculateWinner(squares) {
 const lines = [
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
 [0, 4, 8],
 [2, 4, 6]
 ];

 for (let i=0; i < lines.length; i++) {
 const [a, b, c] = lines[i];
 if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
 return squares[a];
 }
 }
 return null;
}