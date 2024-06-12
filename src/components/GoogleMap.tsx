import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-full max-w-full max-h-[860px] mx-auto">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=134wTQZUtiLzuOsPK9l4U1NBgXtK6P_E&ehbc=2E312F"
        width="1280"
        height="480"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
