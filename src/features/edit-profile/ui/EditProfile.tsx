import clsx from 'clsx';
import { Button, ButtonTheme } from 'shared/ui/button';
import styles from './EditProfile.module.scss';

type EditProfileProps = {
  className?: string;
};
export default function EditProfile({ className }: EditProfileProps) {
  //* Должна быть логика действия, раз это фича.
  //* Вожможно модалку открыть с формой редактирования

  return (
    <Button
      className={clsx(styles.EditProfile, className)}
      withIcon="gear"
      theme={ButtonTheme.OUTLINE}
    >
      редакт
    </Button>
  );
}
