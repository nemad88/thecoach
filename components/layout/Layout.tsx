import { HtmlHTMLAttributes } from "react";
import Header from "../Header";

interface LayoutProps extends HtmlHTMLAttributes<HTMLElement> {}

function Layout(props: LayoutProps) {
  return (
    <>
      <Header className={props.className} />
      <main className={props.className}>{props.children}</main>
    </>
  );
}

export default Layout;
