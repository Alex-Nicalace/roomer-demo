import clsx from 'clsx';
import { Button, ButtonTheme } from 'shared/ui/button';
import styles from './ViewGamesButton.module.scss';

type ViewGamesButtonProps = {
  className?: string;
};
export default function ViewGamesButton({ className }: ViewGamesButtonProps) {
  return (
    <Button
      href="/profile/games"
      className={clsx(styles.ViewGamesButton, className)}
      theme={ButtonTheme.OUTLINE}
    >
      МОИ ИГРУМЫ
    </Button>
  );
}
