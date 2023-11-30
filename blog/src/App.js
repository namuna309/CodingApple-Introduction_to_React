import logo from './logo.svg';
import './App.css';

function App() {

  let post = '강남 우동 맛집'; //대충 서버에서 가져온 실제 데이터

  return (
    <div className="App">
      <div>
        {/*  문법 1. html에 class 넣을 땐 className */}
        <h4 className="black-nav">블로그임</h4>
      </div>
      {/* 문법 2. 변수를 html에 꽂아넣을 땐 {중괄호} */}
      <h4>{post}</h4>
      <h4 id={post}>블로그임</h4>
      {/* 문법 3. style 넣고 싶으면  */}
      <h4 style={{color:'red', fontSize:'16px'}}>블로그임22</h4>
    </div>
  );
}

export default App;
