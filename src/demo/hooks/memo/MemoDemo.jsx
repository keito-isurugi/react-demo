import React, { createContext, useContext, useReducer, useMemo } from "react";
import { Button } from "@chakra-ui/react";
const CountContext = createContext();

function countReducer(state, action) {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CountProvider({ children }) {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  const value = {
    state,
    dispatch
  };

  return (
    // value（state か dispatch のどちらか）が更新したら、
    // CountContext.Provider 内のすべての Consumer が再レンダリングされる。
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
}

function Count() {
  console.log("render Count");
  // CountContext からは state のみを取得しているが、
  // dispatch が更新されても再レンダリングされる
  const { state } = useContext(CountContext);

  return <h1>{state.count}</h1>;
}

// function Counter() {
//   console.log("render Counter");
//   // CountContext からは dispatch のみを取得しているが、
//   // state が更新されても再レンダリングされる
//   const { dispatch } = useContext(CountContext);

//   return (
//     <>
//       <Button onClick={() => dispatch({ type: "decrement" })}>-</Button>
//       <Button onClick={() => dispatch({ type: "increment" })}>+</Button>
//     </>
//   );
// }

function Counter() {
  console.log("render Counter1111");
  // CountContext からは dispatch のみを取得しているが、
  // state が更新されても再レンダリングされる
  const { dispatch } = useContext(CountContext);

  // CountContext.Provider の value の更新による Counter コンポーネントの
  // 再レンダリングは避けられない。そのため dispatch を利用するレンダリング結果（計算結果）を
  // メモ化し、不要な再レンダリングを防ぐ。
  return useMemo(() => {
    console.log("rerender Counter2222");
    return (
      <>
        <Button onClick={() => dispatch({ type: "decrement" })}>-</Button>
        <Button onClick={() => dispatch({ type: "increment" })}>+</Button>
      </>
    );
  }, [dispatch]);
}

const DispatchHoge = React.memo(({ dispatch }) => {
  console.log("ほげ");

  return (
    <>
      <h1>hoge</h1>
    </>
  );
});

function Hoge() {
  const { dispatch } = useContext(CountContext);
  return <DispatchHoge dispatch={dispatch} />;
}

function Foo() {
  const { dispatch } = useContext(CountContext);
  // const { state } = useContext(CountContext);
  console.log("ふー");
  return useMemo(() => {
    return (
      <>
        <h1>foo</h1>
      </>
    );
  })
}

export default function MemoDemo() {
  return (
    <>
      <CountProvider>
        <Count />
        <Counter />
        <Hoge />
        <Foo />
      </CountProvider>
    </>
  );
}