import Link from "next/link";

interface Props {
  link: string;
  linkName: string;
  className?: string;
}

const NavItem: React.FC<Props> = (props) => {
  const { link, linkName } = props;
  return (
    <div className="list-none cursor-pointer">
      <Link href={link}>
        <a className="mr-4 uppercase tracking-widest md:p-2 md:text-sm hover:text-blue-500 transform ease-in-out duration-500">
          {linkName}
        </a>
      </Link>
    </div>
  );
};

export default NavItem;
