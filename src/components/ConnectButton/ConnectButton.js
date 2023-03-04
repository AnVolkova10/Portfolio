import { ArrowRightCircle } from 'react-bootstrap-icons';
export const ConnectButton = ({ children, icon }) => {
  return (
    <button onClick={() => console.log('connect')}>
      {children}
      {icon && <ArrowRightCircle size={25} />}
    </button>
  );
};
