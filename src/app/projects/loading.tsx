interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className=" container mt-[100px]">
      <div className="flex gap-[20px]">
        <div className="border-[1px] border-white/20 px-[15px] bg-white/10 text-[14px] md:px-[20px] md:py-[5px] rounded-[50px]  w-[50px] h-[45px] animate-pulse"></div>
        <div className="border-[1px] border-white/20 px-[15px] bg-white/10 text-[14px] md:px-[20px] md:py-[5px] rounded-[50px]  w-[130px] h-[45px] animate-pulse"></div>
        <div className="border-[1px] border-white/20 px-[15px] bg-white/10 text-[14px] md:px-[20px] md:py-[5px] rounded-[50px] w-[100px] h-[45px]  animate-pulse"></div>
      </div>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[40px] gap-x-[50px] w-full bg-transparent mt-[50px]">
        <div className="group relative overflow-hidden ${height} aspect-w-16 aspect-h-9 border-2 border-white/20 bg-white/10 animate-pulse rounded-xl w-full h-[234px] md:h-[225px] lg:h-[230px]"></div>
        <div className="group relative overflow-hidden ${height} aspect-w-16 aspect-h-9 border-2 border-white/20 bg-white/10 animate-pulse rounded-xl w-full h-[234px] md:h-[225px] lg:h-[230px]"></div>
        <div className="group relative overflow-hidden ${height} aspect-w-16 aspect-h-9 border-2 border-white/20 bg-white/10 animate-pulse rounded-xl w-full h-[234px] md:h-[225px] lg:h-[230px]"></div>
      </section>
    </div>
  );
};

export default Loading;
