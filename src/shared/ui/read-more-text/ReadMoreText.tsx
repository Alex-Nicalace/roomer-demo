'use client';

import clsx from 'clsx';
import { useRef, useState } from 'react';
import { IconButton } from '../button';
import styles from './ReadMoreText.module.scss';

interface ICustomCSSProperties extends React.CSSProperties {
  '--lines-visible'?: number | 'none';
}

interface AnimationState {
  animation: Animation | null;
  isOpening: boolean;
  isClosing: boolean;
  truncatedHeight: number | null;
}

type ReadMoreTextProps = {
  className?: string;
  children?: string;
  lines?: number;
  durationAnimate?: number;
  animationEase?: string;
};
export default function ReadMoreText({
  children,
  className,
  durationAnimate = 300,
  animationEase = 'ease-in-out',
  lines: linesProp = 2,
}: ReadMoreTextProps) {
  const [lines, setLines] = useState<number | 'none'>(linesProp);
  const pRef = useRef<HTMLParagraphElement>(null);
  const expanded = !(lines !== 'none' && lines > 0);
  const style: ICustomCSSProperties = {
    '--lines-visible': lines,
  };
  // ссылки на состояния
  const animationRef = useRef<AnimationState>({
    animation: null,
    isClosing: false,
    isOpening: false,
    truncatedHeight: null,
  });

  function toggler(open?: boolean) {
    setLines((prev) =>
      open === undefined
        ? prev === 'none'
          ? linesProp
          : 'none'
        : open
        ? 'none'
        : linesProp
    );
  }

  function handleClick() {
    // если закрыт или закрывается
    if (!expanded || animationRef.current.isClosing) {
      open();
      // если открыт или открывается
    } else if (expanded || animationRef.current.isClosing) {
      close();
    }
  }

  function close() {
    const paragraphEl = pRef.current;
    if (!paragraphEl) return;

    const startHeight = `${paragraphEl.offsetHeight}px`;
    const endHeight = `${animationRef.current.truncatedHeight}px`;

    animateHeight(startHeight, endHeight, false);
  }

  function open() {
    const paragraphEl = pRef.current;
    if (!paragraphEl) return;

    toggler(true);
    const truncatedHeight = paragraphEl.offsetHeight;
    animationRef.current.truncatedHeight = truncatedHeight; // запоминаем высоту чтоб восстановить при закрытии
    const startHeight = `${paragraphEl.offsetHeight}px`;
    const endHeight = `${paragraphEl.scrollHeight}px`;

    animateHeight(startHeight, endHeight, true);
  }

  function animateHeight(
    startHeight: string,
    endHeight: string,
    open: boolean
  ) {
    const paragraphEl = pRef.current;
    if (!paragraphEl) return;

    const nameProperty = open ? 'isOpening' : 'isClosing';
    animationRef.current[nameProperty] = true;

    if (animationRef.current.animation) {
      animationRef.current.animation.cancel();
    }
    animationRef.current.animation = paragraphEl.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: durationAnimate,
        easing: animationEase,
      }
    );
    animationRef.current.animation.onfinish = () => onAnimationFinish(open);
    animationRef.current.animation.oncancel = () =>
      (animationRef.current[nameProperty] = false);
  }

  function onAnimationFinish(open: boolean) {
    const paragraphEl = pRef.current;
    if (!paragraphEl) return;

    animationRef.current.animation = null;
    animationRef.current.isClosing = false;
    animationRef.current.isOpening = false;
    // paragraphEl.style.height = '';
    paragraphEl.style = `--lines-visible: ${open ? 'none' : linesProp};`;
    toggler(open);
  }

  return (
    <p
      ref={pRef}
      className={clsx(
        styles.ReadMoreText,
        { [styles.expanded]: expanded },
        className
      )}
      style={style}
    >
      <IconButton
        className={styles.button}
        iconName="rightArrow"
        onClick={handleClick}
      />
      {children}
    </p>
  );
}
