import Link, { LinkProps } from 'next/link';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from 'react';

type NativeButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  href?: never;
};

type AnchorProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

export type ButtonOrLinkProps = AnchorProps | NativeButtonProps;
export function ButtonOrLink({
  className,

  ...props
}: ButtonOrLinkProps) {
  if (props.href !== undefined) {
    return <Link {...props} className={className} />;
  }

  return <button {...props} className={className} />;
}
