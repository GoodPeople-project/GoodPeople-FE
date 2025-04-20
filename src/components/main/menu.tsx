import * as style from './css/menu.css';

const Items = [
  { title: '사례 분석', icon: 'analyze' },
  { title: '공유 커뮤니티', icon: 'community' },
  { title: '응답 통계', icon: 'statistics' },
  { title: '양식 작성', icon: 'mode' },
  { title: '사례 분석', icon: 'analyze' },
  { title: '공유 커뮤니티', icon: 'community' },
  { title: '응답 통계', icon: 'statistics' },
  { title: '양식 작성', icon: 'mode' },
];

export function Menu() {
  return (
    <div className={style.container}>
      <div className={style.title}>직장 내 괴롭힘 해결을 위한 서비스</div>
      <div className={style.itemWrapper}>
        {Items.map((item, index) => (
          <div key={index} className={style.menuItem}>
            <img className={style.img} src={`/icons/${item.icon}.svg`} /> {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
