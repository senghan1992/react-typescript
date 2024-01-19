import { ComponentPropsWithoutRef } from "react";

// type ButtonProps = {
//   el: "button";
// } & ComponentPropsWithoutRef<"button">;

// type AnchorProps = {
//   el: "anchor";
// } & ComponentPropsWithoutRef<"a">;

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};
type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: string;
};

const isAnchorProps = (
  props: ButtonProps | AnchorProps
): props is AnchorProps => {
  return "href" in props;
};

const Button = (props: ButtonProps | AnchorProps) => {
  //   const { el, ...otherProps } = props;
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }
  return <button className="button" {...props}></button>;
};

export default Button;
