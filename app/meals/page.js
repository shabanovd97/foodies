import Link from 'next/link';

export default function Meals() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Meals Page</h1>
      <p>
        <Link href="/meals/udon">Udon</Link>
      </p>
      <p>
        <Link href="/meals/ribeye">Steak Rib-eye</Link>
      </p>
    </main>
  );
}
