import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// 변수 여러개를 가져오려면 import {변수1, 변수2} from 경로
import data from './data.js';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Button variant="primary">Primary</Button>{' '}
    
      <div className="main-bg"></div>
      <div className='row'>
        {
          shoes.map(function(s) {
            return (
              <Card shoes={s}/>
            )
          })
        }
      </div>
    </div>
  );
}

// 숙제
// 1. 오늘 만든 상품목록을 컴포넌트로 만들어봅시다. 컴포넌트도 길면 다른 파일로 빼도 상관없음 
// 2. 컴포넌트만들면 그 안에 데이터바인딩도 아마 다시해야겠군요 
// 3. 반복적인 html이나 컴포넌트를 발견하면 연습삼아 map 반복문을 써봅시다. 
function Card(props) {
  let shoes = props.shoes;
  return (
    <div className='col-md-4'>
      <img src={`https://codingapple1.github.io/shop/shoes${shoes.id + 1}.jpg`} width="80%"/>
      <h4>{ shoes.title }</h4>
      <p>{ shoes.content }</p>
    </div>
  );
}

export default App;
