import { IconButton } from 'shared/ui/button';

type ShowLinkedAccountProps = {
  className?: string;
};
export default function ShowLinkedAccount({
  className,
}: ShowLinkedAccountProps) {
  return (
    <IconButton className={className} iconName="cat">
      Котум
    </IconButton>
  );
}
