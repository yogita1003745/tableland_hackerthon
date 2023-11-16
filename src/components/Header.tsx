import React from "react";
import Link from 'next/link';
import Logo from '../../public/images/logos/logo-dark.svg'
import Image from 'next/image';

const Header = () => {
  const navigation = [
    { name: "Explore Content", href: "/explore-content" },
    { name: "Profile", href: "/profile" },
    { name: "Publish", href: "/publish/publish" },
  ];
  return (
    <header>
      <div className="container mx-auto bg-white">
        <div className="flex py-3 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <Link href={"/"} >
            <Image
                src={Logo}
                width={60} height={150} alt=""
            />
            </Link>
          </div>
          <div className="flex flex-row gap-6">
            <div className="md:flex hidden flex-row gap-4 items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
