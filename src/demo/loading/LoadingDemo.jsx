import React from "react";
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
} from "@agney/react-loading";

export const LoadingDemo = () => {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150,
  };

  return (
    <>
      <p>Audio</p>
      <Audio width="50" />
      <p>BallTriangle</p>
      <BallTriangle width="50" />
      <p>Bars</p>
      <Bars width="50" />
      <p>Circles</p>
      <Circles width="50" />
      <p>Grid</p>
      <Grid width="50" />
      <p>Hearts</p>
      <Hearts width="50" />
      <p>Oval</p>
      <Oval width="50" />
      <p>Puff</p>
      <Puff width="50" />
      <p>Rings</p>
      <Rings width="50" />
      <p>SpinningCircles</p>
      <SpinningCircles width="50" />
      <p>TailSpin</p>
      <TailSpin width="50" />
      <p>ThreeDots</p>
      <ThreeDots width="50" />
    </>
  );
};
