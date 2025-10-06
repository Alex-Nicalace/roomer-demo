'use client';

import clsx from 'clsx';
import { useRef, useState } from 'react';
import { Icon } from 'shared/ui/Icon';
import styles from './Accordion.module.scss';

interface AnimationState {
  animation: Animation | null;
  isOpening: boolean;
  isClosing: boolean;
}

type AccordionProps = {
  summary: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  open?: boolean;
  durationAnimate?: number;
  animationEase?: string;
  onToggle?: (open?: boolean) => void;
};
export default function Accordion({
  summary,
  children,
  className,
  open,
  durationAnimate = 300,
  animationEase = 'ease-in-out',
  onToggle,
}: AccordionProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  // ссылки на элементы
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  // ссылки на состояния
  const animationRef = useRef<AnimationState>({
    animation: null,
    isClosing: false,
    isOpening: false,
  });

  const isOpen = open ?? internalOpen;

  function toggleAccordion(open?: boolean) {
    if (onToggle) {
      onToggle(open);
    } else {
      setInternalOpen((prev) => open ?? !prev);
    }
  }

  function handleClick(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.preventDefault();

    // если закрыт или закрывается
    if (!isOpen || animationRef.current.isClosing) {
      openDetails();
      // если открыт или открывается
    } else if (isOpen || animationRef.current.isClosing) {
      closeDetails();
    }
  }

  function openDetails() {
    const detailsElement = detailsRef.current;
    const summaryElement = summaryRef.current;
    const contentElement = contentRef.current;
    if (!contentElement || !detailsElement || !summaryElement) return;

    toggleAccordion(true);
    detailsElement.style.overflow = 'hidden';
    detailsElement.style.height = `${detailsElement.offsetHeight}px`;
    const startHeight = `${detailsElement.offsetHeight}px`;
    const endHeight = `${
      summaryElement.offsetHeight + contentElement.offsetHeight
    }px`;

    animateHeight(startHeight, endHeight, true);
  }

  function closeDetails() {
    const detailsElement = detailsRef.current;
    const summaryElement = summaryRef.current;
    if (!summaryElement || !detailsElement) return;

    detailsElement.style.overflow = 'hidden';

    const startHeight = `${detailsElement.offsetHeight}px`;
    const endHeight = `${summaryElement.offsetHeight}px`;

    animateHeight(startHeight, endHeight, false);
  }

  function animateHeight(
    startHeight: string,
    endHeight: string,
    open: boolean
  ) {
    const detailsElement = detailsRef.current;
    if (!detailsElement) return;

    const nameProperty = open ? 'isOpening' : 'isClosing';
    animationRef.current[nameProperty] = true;

    if (animationRef.current.animation) {
      animationRef.current.animation.cancel();
    }
    animationRef.current.animation = detailsElement.animate(
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
    const detailsElement = detailsRef.current;
    if (!detailsElement) return;
    animationRef.current.animation = null;
    animationRef.current.isClosing = false;
    animationRef.current.isOpening = false;
    detailsElement.style.height = detailsElement.style.overflow = '';
    detailsElement.open = open;
    toggleAccordion(open);
  }

  return (
    <details
      ref={detailsRef}
      open={isOpen}
      className={clsx(styles.Accordion, className)}
    >
      <summary
        ref={summaryRef}
        className={styles.summaryWrap}
        onClick={handleClick}
      >
        <div className={styles.summary}>{summary}</div>
        <Icon className={styles.icon} name="downArrow" />
      </summary>
      <div ref={contentRef} className={styles.content}>
        {children}
      </div>
    </details>
  );
}
