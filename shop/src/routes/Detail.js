import { useParams } from "react-router-dom";
import styled from 'styled-components';

function Detail(props) {

    let Box = styled.button`
        padding: 20px;
        color: grey;
    `;
    // let YellowBtn = styled.button`
    //     background: yellow;
    //     color: black;
    //     padding: 10px;
    // `;
    let YellowBtn = styled.button`
        background: ${ props => props.bg};
        color: ${ props => props.bg == 'blue' ? 'white' : 'black' };
        padding: 10px;
    `;


    let {id} = useParams();
    console.log(id);
    let shoes = props.shoes.find((element => element.id == id));
    console.log(shoes);
    return (
        <>
        <div>
            <Box>
                <YellowBtn bg="orange">버튼임</YellowBtn>
                <YellowBtn bg="blue">버튼임</YellowBtn>
            </Box>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${(shoes.id + 1)}.jpg`}width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{shoes.title}</h4>
                    <p>{shoes.content}</p>
                    <p>{shoes.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Detail;