import Header from "~/components/layout/header";
import Footer from "~/components/layout/footer";
import { Outlet } from "@remix-run/react";

export default function BlogLayout() {
  return (
    <div className="flex flex-col gap-20 bg-white">
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
