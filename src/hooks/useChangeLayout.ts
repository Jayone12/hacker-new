import { useState } from "react";

const useChangeLayout = (): [boolean, (state: boolean) => void] => {
  const [layout, setLayout] = useState(true);
  const handlechangeLayout = (state: boolean) => setLayout(state);

  return [layout, handlechangeLayout];
};
export default useChangeLayout;
