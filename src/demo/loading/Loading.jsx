import React from 'react'
import {
  useLoading,
  Audio,
  BallTriangle,
  Bars,
  Circles,
  Grid,
  Hearts,
  Oval,
  Puff,
  Rings,
  SpinningCircles,
  TailSpin,
  ThreeDots,
} from '@agney/react-loading'

  export const Loading = () => {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150,
  };

  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <div>
      <Audio width="50" />
      <BallTriangle width="50" />
      <Bars width="50" />
      <Circles width="50" />
      <Grid width="50" />
      <Hearts width="50" />
      <Oval width="50" />
      <Puff width="50" />
      <Rings width="50" />
      <SpinningCircles width="50" />
      <TailSpin width="50" />
      <ThreeDots width="50" />
      </div>,
  });
  return (
    <div style={style}>
      <div>
        <section {...containerProps}>
          {indicatorEl} {/* renders only while loading */}
        </section>
      </div>
    </div>
  );
}

