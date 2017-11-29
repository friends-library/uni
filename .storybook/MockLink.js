// @flow
import * as React from 'react';

type Props = {
  className: string,
  children: React.Node,
  to: string,
};

export default ({ className, children, to }: Props) => {
  return (
    <a className={className || ''} href={to} onClick={e => e.preventDefault()}>
      {children}
    </a>
  );
};
