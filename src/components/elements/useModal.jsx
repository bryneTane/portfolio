import { useState } from "react";

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  return {
    isVisible,
    setIsVisible,
  };
};

export default useModal;
