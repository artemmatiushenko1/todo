import { PropsWithChildren } from 'react';
import './Card.scss';

const Card = ({ children }: PropsWithChildren) => {
  return <div className="card">{children}</div>;
};

export default Card;
