type CompanySize = 'under5' | '5to30' | '30to100' | '100to300' | 'over300';

// 1. 괴롭힌 내용 입력
export type Content = {
  content?: string;
  startTime?: Date;
  endTime?: Date;
  onGoing?: boolean;
  position?: string;
  relation?: string;
  size?: CompanySize;
  department?: string;
  information?: string;
};

// 2. 괴롭힌 기간 입력
export type Period = {
  content: string;
  startTime?: Date;
  endTime?: Date;
  onGoing?: boolean;
  position?: string;
  relation?: string;
  size?: CompanySize;
  department?: string;
  information?: string;
};

// 3. 가해자 정보 입력
export type OffenderInfo = {
  content: string;
  startTime: Date;
  endTime: Date;
  onGoing?: boolean;
  position?: string;
  relation?: string;
  size?: CompanySize;
  department?: string;
  information?: string;
};

// 4. 회사 정보 입력
export type CompanyInfo = {
  content: string;
  startTime: Date;
  endTime: Date;
  onGoing?: boolean;
  position: string;
  relation: string;
  size?: CompanySize;
  department?: string;
  information?: string;
};

// 5. 추가 정보 입력
export type AdditionalInfo = {
  content: string;
  startTime: Date;
  endTime: Date;
  onGoing?: boolean;
  position: string;
  relation: string;
  size: CompanySize;
  department: string;
  information?: string;
};

export type FormData = {
  Content: Content;
  Period: Period;
  OffenderInfo: OffenderInfo;
  CompanyInfo: CompanyInfo;
  AdditionalInfo: AdditionalInfo;
};
