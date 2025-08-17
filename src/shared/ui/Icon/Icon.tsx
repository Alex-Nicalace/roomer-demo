import clsx from 'clsx';

import { iconMap, IconName } from './iconMap';

import styles from './Icon.module.scss';

type IconColor = 'regular' | 'active';

type IconProps = React.SVGProps<SVGSVGElement> & {
  name: IconName;
  color?: IconColor;
};

export function Icon({
  name,
  className,
  color = 'regular',
  ...props
}: IconProps) {
  const SvgIcon = iconMap[name];

  return (
    <SvgIcon className={clsx(className, styles[`${color}Color`])} {...props} />
  );
}
