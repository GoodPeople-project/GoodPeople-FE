import * as style from './css/dashboard.css';

const items = [
  { title: '분석된 사례', value: '1,200+' },
  { title: '분석 정확도', value: '85%' },
  { title: '판례 데이터', value: '500+' },
  { title: '협력 변호사', value: '50+' },
];

export function DashBoard() {
  return (
    <div className={style.container}>
      <div className={style.Wrapper}>
        {items.map((item, index) => (
          <div key={index} className={style.item}>
            <div className={style.large}>{item.value}</div>
            <div className={style.small}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
