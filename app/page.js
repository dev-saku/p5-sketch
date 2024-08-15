import Link from 'next/link';
import styles from '../styles/globals.css';

export default function Home() {
  return (
    <div className={styles.container}>
        <h1>Next.js with p5.js</h1>
        <ul>
            <li><Link href="/conditionals-and-interactivity">conditionals-and-interactivity</Link></li>
            <li><Link href="/curve-with-lines">curve-with-lines</Link></li>
            <li><Link href="/getting-started">getting-started</Link></li>
            <li><Link href="/organizing-code-with-functions">organizing-code-with-functions</Link></li>
            <li><Link href="/variables-and-change">variables-and-change</Link></li>
        </ul>
    </div>
  );
}
