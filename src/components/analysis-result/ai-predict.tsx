import * as style from './css/ai-predict.css';

interface AiPredictProps {
  aiPredict: string;
}

export function AiPredict({ aiPredict }: AiPredictProps) {
  return (
    <div className={style.container}>
      <div className={style.title}>AI 판사 예측 결과</div>
      <div className={style.content}>{aiPredict}</div>
      <button className={style.payButton}>유료 결제하기</button>
    </div>
  );
}
