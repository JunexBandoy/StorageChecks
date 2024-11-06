import { Link } from 'react-router-dom';

interface Props {
  to: string;
  onClick: any;
  children?: React.ReactNode;
}

export const HandleClicker: React.FC<Props> = ({ to, onClick, children }) => {
  return (
    <Link className="" onClick={onClick} to={to}>
      {children}
    </Link>
  );
};
