import { IconButton } from 'shared/ui/button';

type ToggleVisibilityProps = {
  className?: string;
};
export default function ToggleVisibilityUser({
  className,
}: ToggleVisibilityProps) {
  return (
    <IconButton className={className} iconName="eye">
      Это я
    </IconButton>
  );
}
