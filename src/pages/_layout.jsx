import { Html, Head, Main, NextScript } from "next/document";
import Layout from "components/layout";
export default function Layout({ children }) {
  return <Layout>{children}</Layout>;
}
