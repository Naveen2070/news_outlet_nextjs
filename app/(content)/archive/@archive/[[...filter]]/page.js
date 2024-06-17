import NewsList from '@/components/newList';
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news';
import Link from 'next/link';

export default function FilterNewsPage({ params }) {
  let links = getAvailableNewsYears();
  const filter = params.filter;
  const newsYear = filter?.[0];
  const newsMonth = filter?.[1];

  let news;

  if (newsYear && !newsMonth) {
    news = getNewsForYear(newsYear);
    links = getAvailableNewsMonths(newsYear);
  } else if (newsYear && newsMonth) {
    news = getNewsForYearAndMonth(newsYear, newsMonth);
    links = [];
  }

  let newsContent = <p>No news found</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (newsYear && !getAvailableNewsYears().includes(+newsYear)) {
    throw new Error('Invalid year');
  }

  if (newsMonth && !getAvailableNewsMonths(+newsYear).includes(+newsMonth)) {
    throw new Error('Invalid month');
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = newsYear
                ? `/archive/${newsYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
