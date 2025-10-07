import clsx from 'clsx';
import { CreateGameButton } from 'features/create-game';
import { ViewGamesButton } from 'features/view-games';
import styles from './GamesPanel.module.scss';

type GamesPanelProps = {
  className?: string;
};
export default function GamesPanel({ className }: GamesPanelProps) {
  return (
    <div className={clsx(styles.GamesPanel, className)}>
      <CreateGameButton className={styles.create} />
      <ViewGamesButton className={styles.view} />
    </div>
  );
}
