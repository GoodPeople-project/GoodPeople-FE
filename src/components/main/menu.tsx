import * as style from './css/menu.css';

const Items = [
  { title: '사례 분석', icon: '📊' },
  { title: '공유 커뮤니티', icon: '👥' },
  { title: '변호사 찾기', icon: '📚' },
  { title: '양식 작성', icon: '📝' },
];

export function Menu() {
  return (
    <div className={style.container}>
      <div className={style.title}>직장 내 괴롭힘 해결을 위한 서비스</div>
      <div className={style.itemWrapper}>
        {Items.map((item, index) => (
          <div key={index} className={style.menuItem}>
            <div className={style.icon}>{item.icon}</div>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
