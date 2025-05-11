import { useFormContext } from 'react-hook-form';
import * as style from './css/analysis-funnel.css';
import { FormData } from '@/types/analysis';

export function ContentComponent() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();
  return (
    <form className={style.stepContainer}>
      <div className={style.stepText}>STEP 1: 괴롭힌 내용</div>
      <div className={style.notice}>
        괴롭힘 사례를 상세히 적어주세요. 이야기 형식으로 적으면 AI가 판단하기 더 좋아요!
      </div>

      <div>
        <label className={style.label}>내용</label>
        <textarea
          className={style.textarea}
          placeholder="괴롭힘 내용을 상세히 적어주세요. 물질적인 피해와 정신적인 고통 등도 포함되면 판단에 도움이 됩니다."
          {...register('Content.content', {
            required: '내용은 필수 입력 항목입니다.',
            minLength: {
              value: 300,
              message: '사례는 최소 300자 이상이어야 합니다',
            },
          })}
        />
        <div className={style.error}>{errors?.Content?.content?.message ?? <>&nbsp;</>}</div>
      </div>
    </form>
  );
}
