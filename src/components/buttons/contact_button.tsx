import Link from "next/link";

interface ContactBtnProps {}

const ContactBtn: React.FC<ContactBtnProps> = () => {
  return (
    <Link
      href="/contact"
      className="btn btn-sm lg:btn-lg flex items-center cursor-pointer"
    >
      Contact me
    </Link>
  );
};

export default ContactBtn;
