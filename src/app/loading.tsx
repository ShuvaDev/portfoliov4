interface loadingType {}

const Loading: React.FC<loadingType> = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
