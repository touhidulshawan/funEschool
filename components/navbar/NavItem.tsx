import Link from "next/link";

interface Props {
  link: string;
  linkName: string;
  className?: string;
}

const NavItem: React.FC<Props> = (props) => {
  const { link, linkName } = props;
  return (
    <li className="list-none">
      <Link href={link}>
        <a>{linkName}</a>
      </Link>
    </li>
  );
};

export default NavItem;
