"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import CartButton from "./CartButton";

function Navbar() {
  const pathname = usePathname();

  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Store",
      href: "/store",
    },
  ];

  return (
    <nav className="shadow p-3 text-xl">
      <Container>
        <div className="flex justify-between">
          <div>
            {links.map((item) => (
              <Link
                className={`mr-2 ${
                  pathname == item.href ? "text-green-700" : ""
                }`}
                key={item.href}
                href={item.href}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <Link href="/cart">
              <CartButton />
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
