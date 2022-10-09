import classNames from "classnames";
import Link from "next/link";
import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  ReactNode,
} from "react";
import { IconType } from "react-icons";

const Button: FC<
  (
    | ButtonHTMLAttributes<HTMLButtonElement>
    | AnchorHTMLAttributes<HTMLAnchorElement>
  ) & {
    Icon?: IconType;
    children: ReactNode;
  }
> = ({ children, className, Icon, ...props }) => {
  const buttonClass = classNames(
    "px-1 py-1 min-w-max w-24 rounded-md bg-white hover:text-green-500 border space-x-1 flex items-center  disabled:hover:text-gray-200 shadow disabled:cursor-not-allowed transition-colors cursor-disabled disabled:opacity-30 pointer-none disabled:hover:bg-gray-700  hover:border-green-500",
    className
  );

  if ((props as AnchorHTMLAttributes<HTMLAnchorElement>).href) {
    const { href, ...linkProps } =
      props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href!}>
        <a className={buttonClass} {...linkProps}>
          {Icon && <Icon />}
          <span className="flex-1">{children}</span>
        </a>
      </Link>
    );
  }

  return (
    <button
      className={buttonClass}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {Icon && <Icon />}
      <span className="flex-1">{children}</span>
    </button>
  );
};

export default Button;
