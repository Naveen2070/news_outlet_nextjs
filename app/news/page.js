import Link from 'next/link';
import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((items) => (
          <li key={items.id}>
            <Link href={`/news/${items.slug}`}>
              <Image
                width={300}
                height={300}
                src={`/images/news/${items.image}`}
                alt={items.title}
              />
              <span>{items.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
