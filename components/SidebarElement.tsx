import Link from "next/link";

interface Props {
  title: string;
  icon?: JSX.Element;
}

const SidebarElement = ({ title, icon }: Props) => {
  return (
    <Link
      href={`/dashboard/${title.toLowerCase()}`}
      className="w-full flex pl-20"
    >
      {icon && <span className="mr-4 text-3xl">{icon}</span>}
      {title}
    </Link>
  );
};
export default SidebarElement;
