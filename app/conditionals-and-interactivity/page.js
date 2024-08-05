import dynamic from 'next/dynamic';
import conditionalsAndInteractivity from '../../sketches/conditionalsAndInteractivity';

const P5Wrapper = dynamic(() => import('../../components/P5Wrapper'), { ssr: false });

export default function Page() {
  return (
    <div>
      <h1>Conditionals And Interactivity</h1>
      <P5Wrapper sketch={conditionalsAndInteractivity} />
    </div>
  );
}