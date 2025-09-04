'use client';

import { useRouter } from 'next/navigation';
import { IconButton } from 'shared/ui/button';

type BackButtonProps = {
  className?: string;
};
export default function BackButton({ className }: BackButtonProps) {
  const router = useRouter();

  return (
    <IconButton
      className={className}
      iconName="leftArrow"
      onClick={() => router.back()}
    />
  );
}
