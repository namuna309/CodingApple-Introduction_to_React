import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

function Detail(props) {


    let {id} = useParams();
    console.log(id);
    let shoes = props.shoes.find((element => element.id == id));
    let [cnt, setCnt] = useState(0);
    let [disp, setDisp] = useState(true);

    useEffect(() => {
        console.log('안녕');
        setTimeout(() => setDisp(false), 3000);
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${(shoes.id + 1)}.jpg`}width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{shoes.title}</h4>
                    <p>{shoes.content}</p>
                    <p>{shoes.price}원</p>
                    <button className="btn btn-danger" onClick={() => {setCnt(cnt + 1);setDisp(true)}}>주문하기</button>
                    {
                        disp ? <YellowBox/> : null
                    }
                </div>
            </div>
        </div>

        
    )
}

function YellowBox() {
    return(
        <div style={{width:'100px', height:'100px', backgroundColor: 'yellow'}}>
        </div>
    )
}

export default Detail;