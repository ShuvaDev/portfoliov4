import dynamic from "next/dynamic";
const CreatePost = dynamic(() => import("./_components/create-post"), {
  ssr: false,
});

const Page = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <CreatePost />
    </div>
  );
};

export default Page;
