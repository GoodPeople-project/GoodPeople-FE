import { useFormContext } from 'react-hook-form';
import * as style from './css/analysis-funnel.css';
import { FormData } from '@/types/analysis';

export function CompanyInfoComponent() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <form className={style.stepContainer}>
      <div className={style.stepText}>STEP 4: 회사 정보</div>

      <div className={style.inputWrapper}>
        <label className={style.label}>회사 규모 </label>
        <select
          {...register('CompanyInfo.size', { required: '회사 규모를 선택해주세요.' })}
          className={style.input}
        >
          <option value="">회사 규모를 선택하세요</option>
          <option value="under5">5인 미만</option>
          <option value="5to30">5~30인</option>
          <option value="30to100">30~100인</option>
          <option value="100to300">100인~300인</option>
          <option value="over300">300인 이상</option>
        </select>
        <div className={style.error}>{errors?.CompanyInfo?.size?.message ?? <>&nbsp;</>}</div>
      </div>

      <div className={style.inputWrapper}>
        <label className={style.label}>근무 부서 </label>
        <input
          {...register('CompanyInfo.department', { required: '근무부서를 입력해주세요.' })}
          className={style.input}
          placeholder="예: 마켓팅팀, 인사팀, 개발팀 등"
        />
        <div className={style.error}>{errors?.CompanyInfo?.department?.message ?? <>&nbsp;</>}</div>
      </div>
    </form>
  );
}
