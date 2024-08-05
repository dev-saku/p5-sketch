import dynamic from 'next/dynamic';
import curveWithLines from '../../sketches/curveWithLines';

const P5Wrapper = dynamic(() => import('../../components/P5Wrapper'), { ssr: false });

export default function Page() {
  return (
    <div>
      <h1>Curve With Lines</h1>
      <P5Wrapper sketch={curveWithLines} />
    </div>
  );
}