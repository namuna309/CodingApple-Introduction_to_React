import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'; //대충 서버에서 가져온 실제 데이터
  let [title, b] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);  // a -> state에 저장했던 자료, b -> state 변경도와주는 함수
  
  // 일반 문법
  let num = [1, 2];
  var a = num[0];
  var c = num[1]

  // Destructuring 문법
  var [a, c] = [1, 2];

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{ title[0] }</h4>
        <p>2월17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>2월17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>2월17일 발행</p>
      </div>
    </div>
  );
}

export default App;
