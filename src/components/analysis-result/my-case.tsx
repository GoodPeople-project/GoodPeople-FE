import * as style from './css/my-case.css';

interface MyCaseInterface {
  myCase: string;
}

export function MyCase({ myCase }: MyCaseInterface) {
  return (
    <div className={style.container}>
      <div className={style.title}>입력하신 사례</div>
      <div className={style.content}>{myCase}</div>
    </div>
  );
}
