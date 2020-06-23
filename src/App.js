import React, { useState, useEffect, useCallback } from "react";

export default function App() {
  const [counter, setCount] = useState(0);
  const [arr, setArray] = useState([]);

  //функция добавляет в массив id элемента и его value сгенерированное рандомным образом от 0 до 100 + увеличивает каунтер на кнопке
  const addArray = useCallback(
    () => {
      setArray([
        ...arr,
        //добавляем в существующий массив  id: value и value: random.number
        { id: arr.length, value: Math.floor(Math.random() * 100) + 1 },
      ]);
      setCount(counter + 1);
    }, //депенденсис
    [arr, counter]
  );

  useEffect(
    () => {
      const timeout = setTimeout(() => addArray(counter + 1), 1000);
      //чистим таймаут
      return () => clearTimeout(timeout);
    }, // депенденсис
    [counter, addArray]
  );

  return (
    <div className="App">
      <button onClick={addArray}>Инкрементировать: {counter}</button>
      <div>
        <ul>
          {arr.map((e) => (
            <li key={e.id}>{e.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
