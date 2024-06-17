import NewsList from '@/components/newList';
import { getLatestNews } from '@/lib/news';

export default function LatestPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h1>Latest News</h1>
      <NewsList news={latestNews} />
    </>
  );
}
