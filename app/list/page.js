import Image from "next/image";


// map 함수를 사용하여 단순배열을 순회하는 방법
export default function List() {

  

  let 상품 = ['Tomatoes', 'Pasta', 'Coconut'];
  return (
    <div> 
      <h4 className="title">상품목록</h4>
      { 
        상품.map((item,index) => {
          return (
            <div className="food" key={index}> 
           
              <img src={`/food`+index+`.png`} className="food-img"/>  
           
              <h4>{item} $40</h4>
            </div>
          );
        })
      }
    </div>
  );
}


// map 함수를 사용하여 객체배열을 순회하는 방법 

// export default function List() {
//   let 상품 = [
//     { name: 'Tomatoes', price: 40 },
//     { name: 'Pasta', price: 30 },
//     { name: 'Coconut', price: 50 },
//   ];

//   return (
//     <div>
//       <h4 className="title">상품목록</h4>
//       {
//         상품.map((item, index) => {
//           return (
//             <div key={index} className="food">
//               <h4>{item.name} ${item.price}</h4>
//             </div>
//           );
//         })
//       }
//     </div>
//   );
// }

// map 함수를 사용하겨 중첩배열을 순회하는 방법
// 사용법은 이중 for문 사용하듯, outer 배열을 먼저 조회하여 key들을 조회
// 이후 inner 배열의 key를 조회

// export default function List() {
//   const 상품 = [
//     { name: 'Tomatoes', categories: ['Fruit', 'Red', 'Fresh'], price: 40 },
//     { name: 'Pasta', categories: ['Grain', 'Yellow', 'Dry'], price: 30 },
//     { name: 'Coconut', categories: ['Fruit', 'Brown', 'Fresh'], price: 50 }
//   ];
//   return (
//     <div>
//       <h4 className="title">상품목록</h4>
//       {
//         상품.map((item, index) => (
//           <div key={index} className="food">
//             <h4>{item.name} ${item.price}</h4>
//             <ul>
//               {item.categories.map((category, categoryIndex) => (
//                 <li key={categoryIndex}>{category}</li>
//               ))}
//             </ul>
//           </div>
//         ))
//       }
//     </div>
//   );
// }

// map 함수를 사용하여 이중객체를 순회하는 방법
// Object.keys()는 Java의 HashMap타입의 변수의 Key를 반환하는 keySet()과 같음 
// Key : value 를 반환하는 entrySet()과 헷갈리지 말 것 .

// export default function ProductInfo() {
//   const 상품정보 = {
//     Tomatoes: { price: 40, color: 'Red' },
//     Pasta: { price: 30, color: 'Yellow' },
//     Coconut: { price: 50, color: 'Brown' }
//   };

//   return (
//     <div>
//       {Object.keys(상품정보).map((key, index) => (
//         <div key={index}>
//           <h4>{key}: ${상품정보[key].price}</h4>
//           <p>Color: {상품정보[key].color}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
