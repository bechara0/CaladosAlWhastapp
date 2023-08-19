const Error = ({ children }) => {
  return (
    <div className="bg-red-700 text-white w-1/2 p-2 my-3 font-extralight uppercase">
      <p>{children}</p>
    </div>
  );
};

export default Error;
