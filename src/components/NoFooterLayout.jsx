import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function NoFooterLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}