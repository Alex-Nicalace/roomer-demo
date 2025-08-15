import { iconMap, IconName } from './iconMap';

type IconProps = React.SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, ...props }: IconProps) {
  const SvgIcon = iconMap[name];

  return <SvgIcon {...props} />;
}
