const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "aqua"
}

export const ChildArea = (props) =>  {
  const {open} = props
  console.log('ChildAreaがレンダリング')

  const data = [...Array(2000).keys()]
  data.forEach(() => {
    console.log('...')
  })
  return (
    <>
      {open ? (
        <div  style={style}>
          <p>child components</p>
        </div>
      ) : null}
    </>
  )
}
