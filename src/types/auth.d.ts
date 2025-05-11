export interface LoginResponse {
  timestamp: string; // 응답 시간 (ISO 8601)
  status: number; // HTTP 상태 코드 (예: 200)
  message: string; // 응답 메시지
  result: TokenResult; // JWT 관련 정보
}

export interface TokenResult {
  access_token: string;
  token_type: string; // 일반적으로 "Bearer"
  expires_in: number; // 밀리초 단위 만료 시간 (예: 86400000ms = 24시간)
  refresh_token: string;
}
