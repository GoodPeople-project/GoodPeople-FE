import Link from 'next/link';
import * as style from './css/menu.css';

const MenuItems = [
  { title: '사례분석', url: '분석' },
  { title: '공유 커뮤니티', url: '공유 커뮤니티' },
  { title: '변호사 찾기', url: '변호사 찾기' },
  { title: '법률 양식', url: '법률 양식' },
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
