import { useState } from 'react';
function Counter (){
const [count, setCount] = useState(0);
const increment = ()=>{
    setCount(count+1)
}; 
const decrement = ()=>{
    setCount(count-1)
};
return (
<div>
<p>簡單計數器</p>
<p>{count}</p>
<button onClick={decrement}> - </button>
<button onClick={increment}> + </button>
</div>
)
}

export default Counter;