import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <a>
        <Image
          src="/images/children.svg"
          alt="logo"
          width={75}
          height={75}
        ></Image>
      </a>
    </Link>
  );
};

export default Logo;
