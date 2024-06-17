'use client';
import { DUMMY_NEWS } from '@/dummy-news';
import { notFound, useRouter } from 'next/navigation';

export default function InterceptedImagePage({ params }) {
  const router = useRouter();
  const newsItemSlug = params.slug;
  const newsItems = DUMMY_NEWS.find((item) => item.slug === newsItemSlug);

  if (!newsItems) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <h1>{newsItems.title}</h1>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItems.image}`} alt={newsItems.title} />
        </div>
      </dialog>
    </>
  );
}
