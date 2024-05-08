interface loadingType {}

const Loading: React.FC<loadingType> = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="loader">Loading</div>
    </div>
  );
};

export default Loading;
