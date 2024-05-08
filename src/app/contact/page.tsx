// Packages
import dynamic from "next/dynamic";

// Components
import ContactBody from "@/components/homePage/contact-body";
const Header = dynamic(() => import("@/components/homePage/Header"), {
  ssr: false,
});
const PageTransition = dynamic(
  () => import("@/components/animation/page-transition"),
  {
    ssr: false,
  }
);

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="widthContainer">
      <PageTransition>
        <Header />
        <ContactBody />
      </PageTransition>
    </div>
  );
};

export default Contact;
