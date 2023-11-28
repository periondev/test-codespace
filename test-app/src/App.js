import logo from './logo.svg';
import './App.css';
import Counter from './Counter'; // 5.React: 組件 (計數器)

// 4. React: 條件渲染
function ConditionalRendering({ isLoggedIn }) {
  return isLoggedIn?<p>您已登入</p>:<p>請登入</p>;
}

function App() {

// 1. JavaScript: 字串反轉
 function reverseString(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverseString("Hello")); // 預期輸出: "olleH”
  
// 2. JavaScript: 陣列過濾
 const numbers = [2, 8, 4, 10, 1, 7];
 function filterNumbersGreaterThanFive(numbers) {
  let result = numbers.filter((num)=>num>5)
 return result
  // 實作你的解答
  }
 console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]

// 3. JavaScript: 重構 
//  function formatName(firstName, lastName) {
//   let formattedName = '';
//   if (firstName) {
//     formattedName += firstName;
//   }
//   if (lastName) {
//     formattedName += ' ' + lastName;
//   }
//   return formattedName;
// }
// 以下為重構後程式碼，從上可知formatName函數用於姓名的格式化，首先判斷firstName有無，然後以三元條件判斷式呈現程式碼:
// 若有lastName則在firstName後方加入空格與lastName隔開，否則僅有firstName。
function formatName(firstName, lastName) {
  if(firstName){
    let formattedName = lastName?firstName+' '+ lastName:firstName
    return formattedName;
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ConditionalRendering isLoggedIn={true} />
        <Counter/>
      </header>
    </div>
  );
}

export default App;
