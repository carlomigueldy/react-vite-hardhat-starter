import { useState } from "react";

export function useSmartContract() {
  const [helloWorld, setHelloWorld] = useState<string | null>();

  return {
    helloWorld,
    setHelloWorld,
  };
}
