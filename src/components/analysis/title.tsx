import * as style from './css/title.css';

export function Title() {
  return (
    <div className={style.Container}>
      <div className={style.Large}>나의 직장 내 괴롭힘 사례 분석하기</div>
      <div className={style.Small}>
        단계별로 정보를 입력하시면 유사한 판례와 승소 확률을 분석해 드립니다
      </div>
    </div>
  );
}
