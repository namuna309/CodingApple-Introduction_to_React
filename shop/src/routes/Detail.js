import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

function Detail(props) {


    let { id } = useParams();
    console.log(id);
    let shoes = props.shoes.find((element => element.id == id));
    let [cnt, setCnt] = useState(0);
    let [disp, setDisp] = useState(true);
    let [al, setAlert] = useState(false);
    let [tab, changeTab] = useState(0);
    let [fade, setFade] = useState('');

    // useEffect(() => {
    //     console.log('안녕');
    //     let a = setTimeout(() => setDisp(false), 3000);
    //     return () => {
    //         clearTimeout(a);
    //     }
    // , [cnt]});
    useEffect(() => {
        if (al == true) alert("그러지마세요");
        setAlert(false);
        return () => {
            setAlert(false);
        }
    }, [al]);

    // 숙제: Detail 컴포넌트 로드시 투명도가 0에서 1로 서서히 증가하는 애니메이션을 주려면?
    useEffect(() => {
        setTimeout(() => {
            setFade('end');
        }, 10)
        return () => {
            setFade('');
        }
    }, [id])

    return (
        <div className={`container start ${fade}`}>
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${(shoes.id + 1)}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{shoes.title}</h4>
                    <p>{shoes.content}</p>
                    <p>{shoes.price}원</p>
                    <button className="btn btn-danger" onClick={() => { setCnt(cnt + 1); setDisp(true) }}>주문하기</button>
                    {
                        disp ? <YellowBox /> : null
                    }
                    <input type="text" onChange={() => setAlert(true)}></input>
                </div>
            </div>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={() => changeTab(0)}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => changeTab(1)}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => changeTab(2)}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab = {tab}/>
        </div>
    )
}


// 팁1 .props 귀찮으면 -> 전달인자 이름 바로 쓸수있음
// 팁2. 상황에 따라 if 안써도 됨
function TabContent({tab}) {
    // if (tab == 0) {
    //     return (<div>내용0</div>);
    // }
    // else if (tab == 1) {
    //     return (<div>내용1</div>);
    // }
    // else if (tab == 2) {
    //     return (<div>내용2</div>);
    // }
    let [fade, setFade] = useState(''); 

    useEffect(() => {
        setTimeout(() => {
            setFade('end');
        }, 10)
        return () => {
            setFade('');
        }
    }, [tab])

    return <div className={`start ${fade}`}>
        { [<div>내용0</div>, <div>내용1</div>, <div>내용3</div>][tab]} 
    </div>
     
}



function YellowBox() {
    return (
        <div style={{ width: '100px', height: '100px', backgroundColor: 'yellow' }}>
        </div>
    )
}

export default Detail;