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

  function editTitle() {
    let copy = [...title];
    copy[0] = '여자 코트 추천';
    changeTitle(copy);
  }

  function sortTitle() {
    let sortedTitles = [...title];
    sortedTitles.sort();
    changeTitle(sortedTitles);
  }

  return (
    <div className="App">
      <div className="black-nav">
        {/* 숙제: 버튼누르면 첫 글이 '여자코튼 추천'으로 바뀌는 기능 만들기 */}
        <h4>ReactBlog</h4>
      </div>
      <button onClick={() => editTitle()}>글 수정</button>
      <button onClick={() => sortTitle()}>제목 내림차순 정렬</button>
      {
        title.map(function(t, i) {
          return (
            <div className="list">
              <h4 onClick={() => {setModal(!modal)}}>{t}<span onClick = {() => upCnt(i) }>👍</span> { likes[i] } </h4>
              <p>2월17일 발행</p>
            </div>
          )
        })
      }
      {
        modal == true ? <Modal 작명={title} edit={() => editTitle()}/> : null
        // modal == true ? <Modal color='yellow' 작명={title}/> : null
      }
    </div>
  );
}


// 부모 -> 자식 state 전송하는 법
// 1. <자식컴포넌트 작명 = {state이름}>
// 2. props 파라미터 등록 후 'props.작명' 사용
// 중요! 부모 to 자식은 가능 but 자식 to 부모 또는 자식 to 자식은 안된다
// function Modal(props){
//   return (
//     <div className="modal">
//       <h4>{props.작명}</h4>
//       <p>날짜</p>
//       <p>상세내용</p>
//     </div>
//   )
// }

// 다양한 색의 모달창이 필요하다?
function Modal(props){
  return (
    <div className="modal" style={{background: props.color}}>
      <h4>{props.작명[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => props.edit()}>글수정</button>
    </div>
  )
}

// 숙제: 글 수정 버튼 누르면 첫 글제목이 '여자코트 추천'으로 바뀌어야함
export default App;

// 동적 UI 만드는 스텝
// 1. HTML CSS로 미리 디자인 완성
// 2. UI의 현재 상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성