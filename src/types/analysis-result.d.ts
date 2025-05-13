export interface CaseData {
  case: string;
  caseNo: string;
  score: number;
  judgementResult: string;
  judgementReason?: string;
}

export interface OtherCaseData {
  case: string;
  caseNo: string;
  score: number;
  judgementResult: string;
}

export interface ResultData {
  myCase: string;
  mainCase: CaseData;
  keyword: string;
  aiPredict: string;
  otherCases: OtherCaseData[];
}

export interface AnalysisResultResponse {
  timestamp: string;
  status: number;
  message: string;
  result: ResultData;
}
