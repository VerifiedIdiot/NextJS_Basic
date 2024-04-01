// 'use Client' 없이 함수나 컴포넌트를 만들면 default server component
// server component는 html에 자바스크립트 기능을 넣을 수 없다
// useState나 useEffect 등의 상태관리 문법 또한 사용불가능
//server component의 장점? 로딩이 빠르다
//server component는 hydration이 없기 때문에 자바스크립트를 읽을 수 없지만 html을 읽는데는 월등히 빠르다

// 사용하는 기준은 다음과 같은 관점을 통해 접근한다

// 클라이언트 컴포넌트 vs 서버 컴포넌트 요약:
// 클라이언트 컴포넌트(Client Component):
// - 브라우저에서 렌더링되며 사용자 상호작용 및 동적 콘텐츠 업데이트에 적합.
// - 클라이언트-특화 데이터 처리 및 실시간 업데이트에 사용.
// - 클라이언트 사이드 라이브러리 및 인터랙티브 기능 구현에 필요.

// 서버 컴포넌트(Server Component):
// - 서버에서 렌더링되며 SEO 최적화 및 초기 로딩 성능 향상에 유리.
// - 민감한 데이터 처리 및 서버 사이드 데이터 의존성 해결에 사용.
// - 초기 렌더링에 필요한 데이터 미리 준비 및 보안 로직 구현에 적합.


import { age, name } from './data.js'

export default function Cart() {
    let 장바구니 = ['Tomatoes', 'Pasta']
    return (
      <div>
        <h4>Cart</h4>
        <CartItem 상품={장바구니[0]}/>
        <CartItem 상품={장바구니[1]}/>
        <Banner content="하나카드"/>
        <Banner content="신한카드"/>
        <Banner content="롯데카드"/>
        <Btn color="blue"/>
      </div>
    )
  }
  
  function CartItem(props){
    return(
      <div className="cart-item">
        <p>{props.상품}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    )
  }  

  function Banner(props){
    return (
      <h5>{props.content} 결제 행사중</h5>
    )
  } 

  function Btn(props){
    return <button style={{ background : props.color }}>버튼임</button>
  }