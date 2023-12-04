/* eslint-disable */

import './App.css';
import React, { useState } from 'react';

function App() {

  let [title, changeTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);  // a -> state에 저장했던 자료, b -> state 변경도와주는 함수
  let [likes, setlikes] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [index, changeIndex] = useState(0)
  let [inputText, changeText] = useState('');

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

  function addTitle(t) {
    let copy_titles = [...title];
    let copy_likes = [...likes];
    copy_titles.unshift(t);
    copy_likes.unshift(0);
    console.log(copy_titles);
    console.log(copy_likes);
    changeTitle(copy_titles);
    setlikes(copy_likes);
  }

  function deleteTitle(i) {
    let copy = [...title];
    copy.splice(i, 1);
    console.log(copy);
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
              <h4 onClick={() => {changeIndex(i); setModal(!modal);}}>{t}<span onClick = {(e) => {e.stopPropagation(); upCnt(i)} }>👍</span> { likes[i] } <button onClick={(e) => {e.stopPropagation(); deleteTitle(i);}}>삭제</button> </h4>
              <p>2월17일 발행</p>
            </div>
          )
        })
      }
      {
        modal == true ? <Modal 작명={title} edit={editTitle} title_num={index}/> : null
        // modal == true ? <Modal color='yellow' 작명={title}/> : null
      }

      <input onChange={(e) => {
        changeText(e.target.value);
      }}></input>
      <button onClick={() => inputText.trim().length != 0 ? addTitle(inputText) : null}>추가</button>
    
      <Modal2></Modal2>
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
      <h4>{props.작명[props.title_num]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => props.edit()}>글수정</button>
    </div>
  )
}

// class를 이용한 옛날 React 문법
class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'kim',
      age: 20
    }
  }
  render() {
    return (
      <div>안녕 {this.state.name} {this.state.age}
      {/* state 변경 */}
      <button onClick={() => {
        this.setState({age: 21});
      }}>나이 변경</button>
      </div>
      // html...
      
    )
  }
}

export default App;

// 동적 UI 만드는 스텝
// 1. HTML CSS로 미리 디자인 완성
// 2. UI의 현재 상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성