import dynamic from 'next/dynamic';
import gettingStarted from '../../sketches/gettingStarted';

const P5Wrapper = dynamic(() => import('../../components/P5Wrapper'), { ssr: false });

export default function Page() {
  return (
    <div>
      <h1>Getting Started</h1>
      <P5Wrapper sketch={gettingStarted} />
    </div>
  );
}