import * as style from './css/example.css';

export function Example() {
  return (
    <div className={style.container}>
      <div className={style.large}>지금 바로 내 사례를 분석해보세요</div>
      <div className={style.small}>직장 내 괴롭힘으로 힘든 상황을 겪고 계신가요?</div>
      <div className={style.small}>굿피플과 함께 법적 대응 방안을 찾아보세요.</div>
      <button className={style.analyzeButton}>무료로 사례 분석하기</button>
    </div>
  );
}
