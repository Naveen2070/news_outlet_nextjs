import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

export default function ImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItems = DUMMY_NEWS.find((item) => item.slug === newsItemSlug);

  if (!newsItems) {
    notFound();
  }
  return (
    <>
      <div className="fullscreen-image">
        <img src={`/images/news/${newsItems.image}`} alt={newsItems.title} />
      </div>
    </>
  );
}
