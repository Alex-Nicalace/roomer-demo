import clsx from 'clsx';
import { Surface } from 'shared/ui/surface';
import styles from './UserCity.module.scss';

type UserCityProps = {
  className?: string;
};
export default function UserCity({ className }: UserCityProps) {
  //TODO: get city from user profile
  const city = 'Краснодар';
  return <Surface className={clsx(styles.UserCity, className)}>{city}</Surface>;
}
