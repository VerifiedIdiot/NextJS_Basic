export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem/>
    </div>
  );
}


// 'use Client' 없이 함수나 컴포넌트를 만들면 default server component
// server component는 html에 자바스크립트 기능을 넣을 수 없다
// useState나 useEffect 등의 상태관리 문법 또한 사용불가능
const CartItem = () => {
  return (
    <>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    </>
  );
};
