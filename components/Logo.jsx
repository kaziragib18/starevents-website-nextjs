import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="" className="flex items-center gap-2">
      <Image
        src="/assets/logo.png"
        alt="Star Events logo"
        width={230}
        height={48}
      />
    </Link>
  );
};

export default Logo;
