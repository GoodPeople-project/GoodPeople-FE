'use client';

import { useAnalysisStore } from '@/store/analysis';
import { AiPredict } from './ai-predict';
import { CoscoreKeyword } from './coscore-keyword';
import * as style from './css/analysis-results.css';
import { MainCase } from './main-case';
import { MyCase } from './my-case';
import { OtherCase } from './other-case';

export function AnalysisResults() {
  const { myCase, mainCase, keyword, aiPredict, otherCases } = useAnalysisStore();
  return (
    <div className={style.containter}>
      <div className={style.title}>사례 분석 결과</div>
      <div className={style.small}>입력하신 사례와 가장 유사한 판례를 분석한 결과입니다</div>
      <MyCase myCase={myCase} />
      <CoscoreKeyword keyword={keyword} score={mainCase.cosScore} />
      <MainCase mainCase={mainCase} />
      <OtherCase otherCase={otherCases} />
      <AiPredict aiPredict={aiPredict} />
    </div>
  );
}
