import Link from 'next/link';
import styles from '../styles/globals.css';

export default function Home() {
  return (
    <div className={styles.container}>
        <h1>Next.js with p5.js</h1>
        <ul>
            <li><Link href="/sketch1">Sketch 1</Link></li>
            <li><Link href="/sketch2">Sketch 2</Link></li>
            <li><Link href="/sketch3">Sketch 3</Link></li>
        </ul>
    </div>
  );
}
