import { useLocation } from "@remix-run/react";
import { Facebook, Twitter } from "react-feather";
import { FacebookShareButton, TwitterShareButton } from "react-share";

export default function ShareButtons() {
  const { pathname } = useLocation();
  const currentUrl = `http://localhost:3000${pathname}`;

  return (
    <div className="hidden items-center lg:ml-8 lg:flex">
      <FacebookShareButton url={currentUrl}>
        <Facebook className="hover:stroke-secondary stroke-white" />
      </FacebookShareButton>
      <TwitterShareButton url={currentUrl}>
        <Twitter className="hover:stroke-secondary ml-3 stroke-white" />
      </TwitterShareButton>
    </div>
  );
}
