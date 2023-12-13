import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeAge, changeName, countUp } from '../store.js';
import { useEffect, useState, memo, useMemo } from 'react';

let Child = memo(function() {
    console.log('재렌더링됨');
    return <div>자식임</div>
})

function func() {
    for(let i = 0; i < 1e9; i++);
    return true;
}

function Cart() {
    let result = func();
    useMemo(() => {return func()}, [state]);
    let cart_data = useSelector((state) => state.cart);
    let state = useSelector((state) => state);
    let dispatch = useDispatch();
    let [count, setCount] = useState(0);
    return (
        <div>
            <Child count={count}></Child>
            <button onClick={()=>setCount(count + 1)}>+</button>
            <h4>{state.user.name}({state.user.age})의 장바구니</h4>
            <button onClick={() => dispatch(changeAge(10))}>버튼</button>
            <Table>
                <thead>
                <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
    </tr>
                </thead>
                <tbody>
                    {
                        cart_data.map((data, i) => {
                            return(
                                <Rows cart_data={data} key={i}/>
                            )
                        })
                    }
                
                </tbody>
            </Table>
        </div>
    )
}

function Rows(props) {
    let dispatch = useDispatch();
    let cart_data = props.cart_data;
    console.log(cart_data);
    return (
        <tr key={props.key}>
            <td>1</td>
            <td>{cart_data.name}</td>
            <td>{cart_data.count}</td>
            <td><button onClick={() => {
                dispatch(countUp(cart_data.id));
            }}>+</button></td>
        </tr>
    )
}

export default Cart;