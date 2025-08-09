import { Link } from "react-router";
import type { ReactNode } from "react";

type NormalLinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
};

function NormalLink({ children, to = "", className = "" }: NormalLinkProps) {
  return (
    <Link className={`text-sm ${className}`} to={to}>
      {children}
    </Link>
  );
}

export default NormalLink;
