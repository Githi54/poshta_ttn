import "./NavITem.component.css";

import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  content: string;
};

export const NavItem: React.FC<Props> = ({
  to,
  content,
}) => {
  return (
    <NavLink
      to={to}
      className="nav_link"
    >
      {content}
    </NavLink>
  );
};
