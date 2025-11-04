import React from "react";
import Image from "next/image";

type Props = {
  size?: number;
};
function Loader({ size = 100}: Props) {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Image
        src="/logo.svg"
        alt="Loading..."
        width={size}
        height={size}
        className="animate-pulse duration-800"
      />
    </div>
  );
}

export default Loader;
