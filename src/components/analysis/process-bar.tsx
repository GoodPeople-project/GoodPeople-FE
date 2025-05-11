import * as style from './css/process-bar.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { completeColor } from './css/process-bar.css';

interface ProcessBarProps {
  currentStep: number;
}

export function ProcessBar({ currentStep }: ProcessBarProps) {
  const renderProcessItems = () => {
    const items = [];

    for (let i = 1; i <= 5; i++) {
      const isActive = i <= currentStep;
      const bgColor = isActive ? '#6A9AB0' : '#D9D9D9';

      // 써클 추가
      items.push(
        <div
          key={`circle-${i}`}
          className={style.circle}
          style={assignInlineVars({
            [completeColor]: bgColor,
          })}
        >
          {i}
        </div>,
      );

      // 바 추가
      if (i < 5) {
        items.push(
          <div
            key={`bar-${i}`}
            className={style.bar}
            style={assignInlineVars({
              [completeColor]: i < currentStep ? '#6A9AB0' : '#D9D9D9',
            })}
          ></div>,
        );
      }
    }

    return items;
  };

  return <div className={style.container}>{renderProcessItems()}</div>;
}
