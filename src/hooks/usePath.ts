import { useEffect, useState } from "react";

export function usePath(): string {
  const [path, setPath] = useState<string>(location.pathname);

  useEffect( () => {
    setPath(location.pathname);
  }, [location.pathname] );

  return path;
}