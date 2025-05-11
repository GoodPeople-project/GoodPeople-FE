import Link from 'next/link';
import * as style from './css/menu.css';

const MenuItems = [
  { title: '사례분석', url: '/analysis' },
  { title: '공유 커뮤니티', url: '/community' },
  { title: '변호사 찾기', url: '/' },
  { title: '법률 양식', url: '/' },
];

export function Menu() {
  return (
    <div className={style.container}>
      {MenuItems.map((item, index) => (
        <Link className={style.Item} href={item.url} key={index}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}
