import dynamic from 'next/dynamic';
import variablesAndChange from '../../sketches/variablesAndChange';

const P5Wrapper = dynamic(() => import('../../components/P5Wrapper'), { ssr: false });

export default function Page() {
  return (
    <div>
      <h1>Variables And Change</h1>
      <P5Wrapper sketch={variablesAndChange} />
    </div>
  );
}