// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +RootComponent?: React.ElementType,
|};

function CardTitle({ className, RootComponent, ...props }: Props): React.Node {
  const classes = cn("card-title", className);
  const Component = RootComponent || "h3";
  return <Component className={classes} {...props} />;
}

export default CardTitle;
