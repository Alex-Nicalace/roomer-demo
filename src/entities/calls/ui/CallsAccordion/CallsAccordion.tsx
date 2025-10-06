import clsx from 'clsx';
import { Accordion } from 'shared/ui/accordion';
import { AccordionSummary } from 'shared/ui/accordion-summary';
import styles from './CallsAccordion.module.scss';

const mockCalls = ['ЗОВ1', 'ЗОВ2', 'ЗОВ3'];

type CallsAccordionProps = {
  className?: string;
};
export default function CallsAccordion({ className }: CallsAccordionProps) {
  const count = 2;
  return (
    <Accordion
      className={clsx(styles.CallsAccordion, className)}
      summary={
        <AccordionSummary label="Зовы" count={count} bulletColor="primary" />
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
