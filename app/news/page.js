import Link from 'next/link';
import { DUMMY_NEWS } from '@/dummy-news';

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((items) => (
          <li key={items.id}></li>
        ))}
      </ul>
    </>
  );
}
