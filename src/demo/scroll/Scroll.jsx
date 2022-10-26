import React, {useRef, useLayoutEffect} from 'react'

export const Scroll = () => {
  const scrollBottomRef = useRef(null);

  useLayoutEffect(() => {
  
    // 以下はtypescriptの書き方。jsの場合は
    // if(scrollBottomRef && scrollBottomRef.current) {
    //   scrollBottomRef.current.scrollIntoView()
    // }
    scrollBottomRef?.current?.scrollIntoView();
  }, []);
  const items = [...Array(100)].map((_, i) => i);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  // scrollBottomRef?.current?.scrollIntoView();

  return (
    <>
    <div>
      {items.map(item => (<div>{item}</div>))}
        <div ref={scrollBottomRef}/>
        <div onClick={returnTop}>click to top</div>
    </div>
    </>
  )
}
