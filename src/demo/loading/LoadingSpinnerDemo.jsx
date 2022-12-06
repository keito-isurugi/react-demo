import { 
Audio,
Radio,
BallTriangle,
Bars,
Blocks,
CirclesWithBar,
Circles,
ColorRing,
Comment,
Discuss,
Dna,
FallingLines,
FidgetSpinner,
Grid,
Hearts,
InfinitySpin,
LineWave,
MagnifyingGlass,
MutatingDots,
Oval,
ProgressBar,
Puff,
RevolvingDot,
Rings,
RotatingLines,
RotatingSquare,
RotatingTriangles,
TailSpin,
ThreeCircles,
ThreeDots,
Triangle,
Vortex,
Watch,
} from 'react-loader-spinner'

export const LoadingSpinnerDemo = () => {

  return (
    <>
      <p>Audio</p>
      <Audio
        height = "80"
        width = "80"
        radius = "9"
        color = 'green'
        ariaLabel = 'three-dots-loading'     
        wrapperStyle
        wrapperClass
      />
      <p>Radio</p>
      <Radio
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      <p>BallTriangle</p>
      <BallTriangle/>
      <p>Bars</p>
      <Bars/>
      <p>Blocks</p>
      <Blocks/>
      <p>CirclesWithBar</p>
      <CirclesWithBar/>
      <p>Circles</p>
      <Circles/>
      <p>ColorRing</p>
      <ColorRing/>
      <p>Comment</p>
      <Comment/>
      <p>Discuss</p>
      <Discuss/>
      <p>DNA</p>
      <Dna/>
      <p>FallingLines</p>
      <FallingLines/>
      <p>FidgetSpinner</p>
      <FidgetSpinner/>
      <p>Grid</p>
      <Grid/>
      <p>Hearts</p>
      <Hearts/>
      <p>InfinitySpin</p>
      <InfinitySpin/>
      <p>LineWave</p>
      <LineWave/>
      <p>MagnifyingGlass</p>
      <MagnifyingGlass/>
      <p>MutatingDots</p>
      <MutatingDots/>
      <p>Oval</p>
      <Oval/>
      <p>ProgressBar</p>
      <ProgressBar/>
      <p>Puff</p>
      <Puff/>
      <p>RevolvingDot</p>
      <RevolvingDot/>
      <p>Rings</p>
      <Rings/>
      <p>RotatingLines</p>
      <RotatingLines/>
      <p>RotatingSquare</p>
      <RotatingSquare/>
      <p>RotatingTriangles</p>
      <RotatingTriangles/>
      <p>TailSpin</p>
      <TailSpin/>
      <p>ThreeCircles</p>
      <ThreeCircles/>
      <p>ThreeDots</p>
      <ThreeDots color="blue"/>
      <p>Triangle</p>
      <Triangle/>
      <p>Vortex</p>
      <Vortex/>
      <p>Watch</p>
      <Watch/>
    </>
  );
};

