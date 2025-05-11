import { useFormContext } from 'react-hook-form';
import * as style from './css/analysis-funnel.css';
import { FormData } from '@/types/analysis';

export function OffenderInfoComponent() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <form className={style.stepContainer}>
      <div className={style.stepText}>STEP 3: 가해자 정보</div>

      <div className={style.inputWrapper}>
        <label className={style.label}>가해자의 직위 </label>
        <input
          {...register('OffenderInfo.position', {
            required: '가해자 직위를 입력해주세요.',
          })}
          className={style.input}
          placeholder="예: 팀장, 부장, 대표이사 등"
        />
        <div className={style.error}>{errors?.OffenderInfo?.position?.message ?? <>&nbsp;</>}</div>
      </div>

      <div className={style.inputWrapper}>
        <label className={style.label}>가해자과의 관계 </label>
        <input
          {...register('OffenderInfo.relation', {
            required: '가해자과의 관계를 입력해주세요.',
          })}
          className={style.input}
          placeholder="예: 직속상사, 다른 부서 직원, 외부 협력업체 등"
        />
        <div className={style.error}>{errors?.OffenderInfo?.relation?.message ?? <>&nbsp;</>}</div>
      </div>
    </form>
  );
}
