import clsx from 'clsx';
import { Button } from 'shared/ui/button';
import styles from './CreateGame.module.scss';

type CreateGameProps = {
  className?: string;
};
export default function CreateGameButton({ className }: CreateGameProps) {
  return (
    <Button className={clsx(styles.CreateGame, className)}>
      СОЗДАТЬ ИГРУМ
    </Button>
  );
}
