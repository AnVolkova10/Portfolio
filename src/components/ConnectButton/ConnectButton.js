import { ArrowRightCircle } from 'react-bootstrap-icons';
export const ConnectButton = ({ children, icon }) => {
  return (
    <button onClick={() => document.getElementById('connect').scrollIntoView()}>
      {children}
      {icon && <ArrowRightCircle size={25} />}
    </button>
  );
};
