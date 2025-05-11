interface AnalysisFooterProps {
  onNext: () => void;
  onPre: () => void;
}
import * as style from './css/analysis-funnel.css';

export function AnalysisFooter({ onNext, onPre }: AnalysisFooterProps) {
  return (
    <div className={style.footer}>
      <div className={style.buttonWrapper}>
        <button type="button" onClick={onPre} className={style.styledBtn.leftBtn}>
          <img src="./icons/left-arrow.svg" />
          <div>이전 단계</div>
        </button>
        <button type="button" onClick={onNext} className={style.styledBtn.rightBtn}>
          <div>다음 단계</div>
          <img src="./icons/right-arrow.svg" />
        </button>
      </div>
      <div className={style.security}>
        ※ 입력하신 정보는 분석 목적으로만 사용되며, 동의 없이 외부로 공개되지 않습니다
      </div>
    </div>
  );
}
