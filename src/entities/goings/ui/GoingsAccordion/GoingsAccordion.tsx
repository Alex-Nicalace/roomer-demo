import clsx from 'clsx';
import { Accordion } from 'shared/ui/accordion';
import { AccordionSummary } from 'shared/ui/accordion-summary';
import styles from './GoingsAccordion.module.scss';

const mockCalls = ['Иду №1', 'Иду №2', 'Иду №3', 'Иду №4', 'Иду №5'];

type CallsAccordionProps = {
  className?: string;
};
export default function GoingsAccordion({ className }: CallsAccordionProps) {
  const count = 3;
  return (
    <Accordion
      className={clsx(styles.CallsAccordion, className)}
      summary={
        <AccordionSummary label="Иду" count={count} bulletColor="secondary" />
      }
    >
      <ul className={styles.list}>
        {mockCalls.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Accordion>
  );
}
