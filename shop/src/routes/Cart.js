import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart() {

    let cart_data = useSelector((state) => state.cart);

    return (
        <div>
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
                        cart_data.map((data) => {
                            return(
                                <Rows cart_data={data}/>
                            )
                        })
                    }
                
                </tbody>
            </Table>
        </div>
    )
}

function Rows(props) {
    let cart_data = props.cart_data;
    console.log(cart_data);
    return (
        <tr>
            <td>{cart_data.id}</td>
            <td>{cart_data.name}</td>
            <td>{cart_data.count}</td>
            <td></td>
        </tr>
    )
}

export default Cart;