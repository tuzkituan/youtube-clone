import { useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const useToastHook = () => {
  const [state, setState] = useState(null);
  const toast = useToast();

  useEffect(() => {
    if (state) {
      const { description, title, status } = state;
      toast({
        title: title,
        description: description,
        status: status,
        duration: 5000,
        position: "bottom-right",
        isClosable: true,
      });
    }
  }, [state, toast]);

  return [state, setState];
}