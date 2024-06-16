import Image from 'next/image';
import Link from 'next/link';

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((items) => (
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
  );
}
