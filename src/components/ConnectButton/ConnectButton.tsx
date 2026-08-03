import { ArrowRightCircle } from 'react-bootstrap-icons';
import type { ReactNode } from 'react';

interface ConnectButtonProps {
  children: ReactNode;
  icon?: boolean;
}

export const ConnectButton = ({ children, icon = false }: ConnectButtonProps) => {
  const scrollToContact = () => {
    document.getElementById('connect')?.scrollIntoView();
  };

  return (
    <button onClick={scrollToContact} type='button'>
      {children}
      {icon && <ArrowRightCircle size={25} />}
    </button>
  );
};
