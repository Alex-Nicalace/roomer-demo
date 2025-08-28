import { IconButton } from 'shared/ui/button';

type ShareProfileProps = {
  className?: string;
};
export default function ShareProfile({ className }: ShareProfileProps) {
  return <IconButton className={className} iconName="share" />;
}
