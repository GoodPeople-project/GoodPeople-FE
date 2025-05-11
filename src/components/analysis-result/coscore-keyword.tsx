import * as style from './css/coscore-keyword.css';

interface CoscoreKeyworInterface {
  keyword: string[];
  score: number;
}
export function CoscoreKeyword({ keyword, score }: CoscoreKeyworInterface) {
  return (
    <div className={style.container}>
      <div className={style.itemWrapper}>
        <div>
          <div className={style.title}>유사도</div>
        </div>
        <div className={style.contentWrapper.score}>
          <div className={style.score}>{score}</div>
          <div>
            <div className={style.small}>가장 유사한 판례와의 일치도</div>
            <div className={style.progress} />
          </div>
        </div>
      </div>
      <div className={style.itemWrapper}>
        <div className={style.title}>핵심 키워드</div>
        <div className={style.contentWrapper.keyword}>
          {keyword.map((item, index) => (
            <div className={style.keyword} key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
