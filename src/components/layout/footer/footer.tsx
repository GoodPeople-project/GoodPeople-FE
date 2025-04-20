import * as style from './css/footer.css';

export function Footer() {
  return (
    <div className={style.container}>
      <div className={style.Wrapper}>
        <div className={style.logo}>굿피플</div>
        <div className={style.slogan}>직장 내 괴롭힘 피해자를 위한</div>
        <div className={style.slogan}>법적 지원 서비스</div>
        <div className={style.copyRight}>© 2025 굿피플. 모든 권리 보유.</div>
      </div>
    </div>
  );
}
