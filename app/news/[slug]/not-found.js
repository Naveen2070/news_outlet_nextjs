import Link from 'next/link';

export default function NewsNotFound() {
  return (
    <div id="error">
      <h1>News Not Found</h1>
      <p>
        Sorry, we couldn't find what you were looking for.
        <Link href="/news">Back to News</Link>
      </p>
    </div>
  );
}
