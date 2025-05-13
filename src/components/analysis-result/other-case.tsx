import * as style from './css/other-case.css';

interface otherCase {
  case: string;
  caseNo: string;
  score: number;
  judgementResult: string;
}

interface otherCaseProps {
  otherCase: otherCase[];
}

type ResultKey = 'win' | 'lose' | 'partial';

const resultKeyMap: Record<string, ResultKey> = {
  승소: 'win',
  패소: 'lose',
  '일부 승소': 'partial',
};

export function OtherCase({ otherCase }: otherCaseProps) {
  return (
    <div>
      <div className={style.title}>다른 유사 사례</div>
      <div className={style.container}>
        <div className={style.column}>
          <div className={style.col.caseNo}>사건 번호</div>
          <div className={style.col.content}>내용</div>
          <div className={style.col.score}>유사도</div>
          <div className={style.col.result}>결과</div>
        </div>
        <div className={style.contentContainer}>
          {otherCase.map((item, index) => {
            const resultKey = resultKeyMap[item.judgementResult];

            return (
              <div className={style.wrapper} key={index}>
                <div className={style.caseNo}>{item.caseNo}</div>
                <div className={style.content}>{item.case}</div>
                <div className={style.score}>{item.score}%</div>
                <div
                  className={`${style.result} ${resultKey ? style.resultVariants[resultKey] : ''}`}
                >
                  {item.judgementResult}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
