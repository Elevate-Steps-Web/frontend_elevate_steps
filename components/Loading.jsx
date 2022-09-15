import { GridLoader } from 'react-spinners';

export default function Loading({ state }) {
  return (
    <div className="w-screen h-screen bg-primary-blue flex flex-row items-center">
      <div className="flex flex-col justify-items-center w-fit h-fit mx-auto">
        <GridLoader
          color="#fff"
          loading={state}
          className="transition-opacity"
        />
      </div>
    </div>
  );
}
