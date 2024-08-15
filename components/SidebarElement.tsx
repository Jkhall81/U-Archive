import Link from "next/link";

interface Props {
  title: string;
  icon?: string;
}

const SidebarElement = ({ title, icon }: Props) => {
  return (
    <Link
      href={`/dashboard/${title.toLowerCase()}`}
      className="w-full flex pl-20"
    >
      {title}
    </Link>
  );
};
export default SidebarElement;
