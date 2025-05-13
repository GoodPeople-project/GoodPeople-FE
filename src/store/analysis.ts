import { create } from 'zustand';

type Case = {
  case: string;
  caseNo: string;
  score: number;
  judgementResult: string;
  judgementReason?: string;
};

type AnalysisState = {
  myCase: string;
  mainCase: Case;
  keyword: string[];
  aiPredict: string;
  otherCases: Case[];
  setResult: (result: {
    myCase: string;
    mainCase: Case;
    keyword: string[];
    aiPredict: string;
    otherCases: Case[];
  }) => void;
};

export const useAnalysisStore = create<AnalysisState>()(set => ({
  myCase: '',
  mainCase: {
    case: '',
    caseNo: '',
    score: 0,
    judgementResult: '',
    judgementReason: '',
  },
  keyword: [],
  aiPredict: '',
  otherCases: [],

  setResult: result =>
    set(() => ({
      myCase: result.myCase,
      mainCase: result.mainCase,
      keyword: result.keyword,
      aiPredict: result.aiPredict,
      otherCases: result.otherCases,
    })),
}));
