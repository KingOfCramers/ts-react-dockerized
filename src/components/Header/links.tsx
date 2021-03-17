import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface LinkType {
  label: string;
  link: string;
}
export interface Props {
  links: LinkType[];
  setMobileOpen(arg: boolean): void;
}

export default function Links({
  links,
  setMobileOpen,
}: Props): ReactElement | null {
  const handleGoToLink = (): void => {
    setMobileOpen(false);
  };

  return (
    <ul>
      {links.map(({ link, label }) => (
        <Link key={link} to={link} onClick={() => handleGoToLink()}>
          <div>Hi</div>
        </Link>
      ))}
    </ul>
  );
}
