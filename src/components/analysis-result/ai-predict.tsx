import { useUserStore } from '@/store/auth';
import * as style from './css/ai-predict.css';

interface AiPredictProps {
  aiPredict: string;
}

export function AiPredict({ aiPredict }: AiPredictProps) {
  const { user } = useUserStore();
  return (
    <div className={style.container}>
      <div className={style.title}>AI 판사 예측 결과</div>
      <div className={`${style.content} ${user.role === 'ROLE_USER' ? style.blur : ''}`}>
        {user.role === 'ROLE_USER_SUBSCRIBED'
          ? aiPredict
          : '저는 2017년 2월 27일에 C 주식회사와 근로계약을 맺었습니다. 이후 그때부터 C가 맡고 있던 한국전력공사의 D 변전소에서 경비원으로 일하게 되었습니다. 변전소에는 저 외에도 C 회사 소속 근로자가 몇 명 있었고, 그중 한 명은 경비반장 역할을 맡고 있었습니다. 경비반장은 회사 내에서 저보다 높은 지위에 있었기 때문에 저희에게 지시를 내릴 수 있었습니다. 그런데 경비반장은 저에게 근로기준법상 보장된 휴게시간조차 제대로 주지 않았습니다. 게다가 자기 앵무새 키우기나 텃밭 가꾸기 같은 업무와는 무관한 개인적인 일까지 시켰습니다. 또 수시로 저희를 촬영하며 감시했는데, 이로 인해 저는 상당한 스트레스를 받았습니다. 심지어 폭언을 하거나 괴롭히는 등 직장에서 부당한 처우도 여러 번 있었습니다. 이런 일이 자꾸 반복되자 저는 어느 날 용기를 내어 경비반장의 부당한 행동을 지적하고 항의했습니다. 그런데 그 이후로 경비반장은 저를 고소했습니다. 그리고 제가 속한 회사에 근무평가점수를 아주 낮게 주는 일이 있었습니다. 이로 인해 회사에서는 저와 재계약을 하지 않겠다고 통보했고, 결국 저는 해고당하게 되었습니다. 그런데 저는 이 해고가 부당하다고 생각해서, 관련 기관에 부당해고 구제신청을 하였고, 그 결과 해고는 부당하다는 인정과 함께 복직 판정을 받았습니다. 그런데도 경비반장은 저의 복직을 방해하기 위해 다른 경비원들에게 허위로 진술서를 작성하라고 압박했다고 들었습니다. 이런 일련의 과정을 겪으면서 저는 오랜 시간 정신적으로 많이 힘들었습니다. 경비반장의 행동 하나하나가 저에게 큰 상처를 주었고, 직장 생활에 큰 어려움이 따랐습니다.'}
      </div>
      {user.role === 'ROLE_USER' ? (
        <button className={style.payButton}>유료 결제하기</button>
      ) : (
        <></>
      )}
    </div>
  );
}
