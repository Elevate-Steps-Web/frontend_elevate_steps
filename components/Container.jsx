export default function Container({ children }) {
  return (
    <div className="container px-4 md:px-18 lg:px-24 2xl:px-28 2xl:max-w-screen-2xl">
      {children}
    </div>
  );
}
