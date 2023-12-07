import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

// 변수 여러개를 가져오려면 import {변수1, 변수2} from 경로
import data from './data.js';
import Detail from './routes/Detail.js';

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  function sortCard() {
    let copy = [...shoes];
    copy.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      if (a.title == b.title) return 0;
    })
    setShoes(copy);
  }

  function addCard(data) {
    let copy = [...shoes, ...data];
    setShoes(copy);
  }

  return (
    <div className="App">



      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {
              navigate('./');
            }

            }>Home</Nav.Link>
            <Nav.Link onClick={() => {
              navigate('/detail')
            }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Button variant="primary">Primary</Button>{' '}

      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

      <Routes>
        <Route path='/' element={
          <>
            <div className="main-bg"></div>
            <Button onClick={() => sortCard()}>상품 재정렬</Button>

            {/* 판매 상품 진열 */}
            <div className='row'>
              {
                shoes.map(function (s) {
                  return (
                    <Card shoes={s} />
                  )
                })
              }
            </div>

            {/* 더보기 버튼 */}
            <button onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json').then((items) => {
                addCard(items.data);
              })
                .catch((e) => {
                  console.log(`실패함: ${e}`);
                });
            }}>더보기</button>
          </>
        } />

        {/* {
          shoes.map(function(s) {
            return (
              <Route path={'/detail/' + (s.id)} element={<Detail shoes={s}/>} />
            )
          })
        } */}
        <Route path={'/detail/:id'} element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>장소임</div>} />
        </Route>
        {/* <Route path="/about/member" element={<div>어바웃페이지임</div>} />
        <Route path="/about/location" element={<div>어바웃페이지임</div>} /> */}
        <Route path='event' element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 무료 증정</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="*" element={<div>없는페이지에요</div>} />
      </Routes>



    </div>
  );
}

function Card(props) {
  let shoes = props.shoes;
  return (
    <div className='col-md-4'>
      <img src={`https://codingapple1.github.io/shop/shoes${shoes.id + 1}.jpg`} width="80%" />
      <h4>{shoes.title}</h4>
      <p>{shoes.content}</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
