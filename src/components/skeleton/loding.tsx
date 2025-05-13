import * as style from './css/loading.css';

export function Loading() {
  return (
    <div className={style.overlay}>
      <div className={style.spinner}>
        <div className={style.spinnerInner}></div>
      </div>
    </div>
  );
}
