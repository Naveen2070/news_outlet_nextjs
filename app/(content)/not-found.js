import Link from 'next/link';

export default function NotFound() {
  return (
    <div id="error">
      <h1>Page Not Found</h1>
      <p>
        Sorry, we couldn't find what you were looking for.
        <Link href="/">Back to Home</Link>
      </p>
    </div>
  );
}
