/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let [title, changeTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);  // a -> state에 저장했던 자료, b -> state 변경도와주는 함수
  let [likes, up] = useState(0);

  // Destructuring 문법
  var [a, c] = [1, 2];

  return (
    <div className="App">
      <div className="black-nav">
        {/* 숙제: 버튼누르면 첫 글이 '여자코튼 추천'으로 바뀌는 기능 만들기 */}
        <h4>ReactBlog</h4>
      </div>
      <button onClick={() => {
        let copy = [...title];
        copy[0] = '여자 코트 추천';
        changeTitle(copy);
        }}>글 수정</button>
      <button onClick={() => {
        let sortedTitles = [...title];
        sortedTitles.sort();
        changeTitle(sortedTitles);
      }}>제목 내림차순 정렬</button>
      <div className="list">
        {/* onClick={} 안엔 함수이름 또는 콜백함수를 넣어야함 */}
        {/* state 변경은 등호로 되지 않음 -> state 변경 함수 활용 */}
        <h4>{ title[0] } <span onClick={() => { up(++likes) }}>👍</span> {likes} </h4> 
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
