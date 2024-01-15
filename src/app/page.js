'use client';
import { useState } from 'react';

function Greeting({ name }) {
  return <h1>Hello, {name}</h1>
}

function MyButton() {
  function handleClick() {
    alert('You clicked me!')
  }

  return (
    <button className='btn_basis' onClick={handleClick}>
      Click me
    </button>
  )
}

function CountBtn({ desc }) {
  const [count, setCount] = useState(0);

  function updateClick() {
    setCount(count + 1);
  }

  return (
    <button className='btn_basis' onClick={updateClick}>
      {desc} {count}
    </button>
  )

}

function CountBtnVariant({ desc, count, onClick }) {
  return (
    <button onClick={onClick}>
      {desc} {count}
    </button>
  )
}


function ListExample() {
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 }
  ]

  const listItems = products.map(product =>
    <li key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>)

  return (
    <ul>{listItems}</ul>
  )
}

export default function Home() {
  const [count, setCount] = useState(0)

  function updateCount() {
    setCount(count + 1)
  }


  return (
    <div className='first_div'>
      <Greeting name={"Warudo"} />
      <MyButton />
      <CountBtn desc={"The count is in"} />
      <ListExample />
      <CountBtn desc={"This counts separetely and is in"} />
      <h2>This btns update together because they share the same useState</h2>
      <div className='second_div'>
        <br/>
        <CountBtnVariant desc={"We update together"} count={count} onClick={updateCount} />
        <CountBtnVariant desc={"We update together"} count={count} onClick={updateCount} />
      </div>
    </div>
  )
}
