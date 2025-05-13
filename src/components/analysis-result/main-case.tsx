import * as style from './css/main-case.css';

interface MainCaseInterface {
  case: string;
  caseNo: string;
  score: number;
  judgementResult: string;
  judgementReason?: string;
}
interface MainCaseProps {
  mainCase: MainCaseInterface;
}

export function MainCase({ mainCase }: MainCaseProps) {
  return (
    <div className={style.container}>
      <div className={style.title}>가장 유사한 사례</div>
      <div className={style.content}>{mainCase.case}</div>
      <div className={style.resultContainer}>
        <div className={style.small}>판결 결과: </div>
        <div className={style.result}>{mainCase.judgementResult}</div>
      </div>
    </div>
  );
}
