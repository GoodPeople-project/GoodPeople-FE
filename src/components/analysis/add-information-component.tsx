import { useFormContext } from 'react-hook-form';
import * as style from './css/analysis-funnel.css';
import { FormData } from '@/types/analysis';

export function AddInformationComponent() {
  const { register } = useFormContext<FormData>();

  return (
    <form className={style.stepContainer}>
      <div className={style.stepText}>STEP 5: 추가 정보 (선택사항)</div>
      <div className={style.notice}>추가적으로 입력할 정보가 있다면 적어주세요 </div>

      <div>
        <label className={style.label}>내용</label>
        <textarea
          className={style.textarea}
          placeholder="괴롭힘 내용외에도 추가적으로 알릴 정보가 있다면 적어주세요."
          {...register('AdditionalInfo.information')}
        />
      </div>
    </form>
  );
}
