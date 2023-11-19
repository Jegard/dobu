import { Form, Link } from "@remix-run/react";
import { useState } from "react";
import { Menu, X } from "react-feather";
// import logo from "~/assets/svg/dobu-logo.svg";
import { useOptionalUser } from "~/utils";
import NavbarLink from "./NavbarLink";
import ShareButtons from "./ShareButtons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useOptionalUser();

  return (
    <header className="bg-red-900 relative">
      <div className="md:flex md:justify-between">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center justify-center">
            <img
              className="h-16 w-auto"
              src='https://static.wikia.nocookie.net/vsbattles/images/7/7f/New_616_Spidey_render.png/revision/latest/scale-to-width-down/340?cb=20220522210527'
              alt="Dobu Martial Arts Gym"
            />
            {user ? (
              <span className="text-white ml-4 text-xs">
                Hi {user.email}!
              </span>
            ) : null}
          </div>

          <div className="md:hidden">
            <button
              className="text-red-500 block hover:text-white focus:text-white focus:outline-none"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6 fill-current" />
              ) : (
                <Menu className="h-6 w-6 fill-current" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`px-2 pb-4 pt-2 ${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center`}
        >
          <NavbarLink url="/">Home</NavbarLink>
          <NavbarLink url="/instructors">Instructors</NavbarLink>
          <NavbarLink url="/memberships">Memberships</NavbarLink>

          <ShareButtons />

          <div className="mt-4 lg:ml-2 lg:mr-4 lg:mt-0">
            {user ? (
              <Form action="/logout" method="post">
                <button
                  type="submit"
                  className="border-red-950 text-red-950 hover:bg-red-300 active:bg-red-300 mt-4 rounded border-2 bg-white px-4 py-2 lg:ml-4 lg:mt-0"
                >
                  Logout
                </button>
              </Form>
            ) : (
              <Link
                to="/login"
                className="bg-red-500 hover:bg-red-500 flex items-center justify-center rounded-md px-4 py-3 font-medium text-white lg:ml-4 lg:mt-0"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
