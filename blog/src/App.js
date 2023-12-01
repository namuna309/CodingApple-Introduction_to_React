/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let [title, changeTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);  // a -> state에 저장했던 자료, b -> state 변경도와주는 함수
  let [likes, setlikes] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  function upCnt(i) {
    let copy_likes = [...likes];
    copy_likes[i] += 1;
    setlikes(copy_likes);
  }

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
      {
        title.map(function(t, i) {
          return (
            <div className="list">
              <h4>{t}<span onClick = {() => upCnt(i) }>👍</span> { likes[i] } </h4>
              <p>2월17일 발행</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;

// 동적 UI 만드는 스텝
// 1. HTML CSS로 미리 디자인 완성
// 2. UI의 현재 상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성