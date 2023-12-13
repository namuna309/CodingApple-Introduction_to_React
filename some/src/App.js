import './App.css';
import { useState, useTransition, useDeferredValue } from 'react';

let a = new Array(10000).fill(0);

function App() {
  let [name, setName] = useState();
  let [isPending, startTransition] = useTransition();
  let state = useDeferredValue(name);
  return (
    <div className="App">
      <input onChange={(e) => {
        startTransition(() => setName(e.target.value))}}/>
      { isPending ? <div>로딩중</div>:
        a.map(() => {
          // return <div>{name}</div>
          return <div>{state}</div>
        })
      }
    </div>
  );
}

export default App;
