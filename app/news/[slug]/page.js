import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const newsItems = DUMMY_NEWS.find((item) => item.slug === newsSlug);

  if (!newsItems) {
    notFound();
  }

  return (
    <>
      <article className="news-article">
        <header>
          <img src={`/images/news/${newsItems.image}`} alt={newsItems.title} />
          <h1>{newsItems.title}</h1>
          <time dateTime={newsItems.date}>{newsItems.date}</time>
        </header>
        <p>{newsItems.content}</p>
      </article>
    </>
  );
}
