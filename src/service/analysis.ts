const URL = process.env.NEXT_PUBLIC_API_URL;

export async function postAnalysis(script: string, token: string) {
  try {
    const response = await fetch(`${URL}/api/script/similarity`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        script,
      }),
    });

    // 응답 상태 확인
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `분석 중 오류가 발생하였습니다.: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('분석 오류 발생', error);
    throw error;
  }
}
