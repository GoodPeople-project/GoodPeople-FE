import { useFormContext } from 'react-hook-form';
import * as style from './css/analysis-funnel.css';
import { FormData } from '@/types/analysis';

export function PeriodComponent() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<FormData>();

  const startTimeRegister = register('Period.startTime', {
    valueAsDate: true,
    required: '날짜를 입력해주세요',
  });
  const endTimeRegister = register('Period.endTime', {
    valueAsDate: true,
    validate: endValue => {
      const start = new Date(watch('Period.startTime') || 0);
      const end = new Date(endValue || 0);
      const onGoing = watch('Period.onGoing');

      if (!onGoing && !endValue) {
        return '종료 날짜를 입력해주세요.';
      }

      if (!onGoing && end < start) {
        return '종료 날짜는 시작 날짜 이후여야 합니다.';
      }

      return true;
    },
  });

  return (
    <form className={style.stepContainer}>
      <div className={style.stepText}>STEP 2: 괴롭힘 기간</div>

      <div className={style.inputWrapper}>
        <label className={style.label}>괴롭힘 시작 날짜 * </label>
        <input type="date" {...startTimeRegister} className={style.input} />{' '}
        <div className={style.error}>{errors?.Period?.startTime?.message ?? <>&nbsp;</>}</div>
      </div>

      <div className={style.inputWrapper}>
        <label className={style.label}>괴롭힘 종료 날짜 </label>
        <input type="date" {...endTimeRegister} className={style.input} />
        <div className={style.error}>{errors?.Period?.endTime?.message ?? <>&nbsp;</>}</div>
      </div>

      <div className={style.inputWrapper}>
        <label className={style.label}>현재 진행 중 </label>
        <input type="checkbox" {...register('Period.onGoing')} />
      </div>
    </form>
  );
}
