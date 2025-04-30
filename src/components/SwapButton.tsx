import React, { useEffect, useState } from "react";
import { swapValuesGeneric } from "../helpers/utils";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";

type Props = {
  refFrom: React.RefObject<HTMLInputElement | null>;
  refTo: React.RefObject<HTMLInputElement | null>;
  onValueChange?: (val1: string, val2: string) => void;
};

export default function SwapButton({ refFrom, refTo, onValueChange }: Props) {
  // const [input1, setInput1] = useState<string>(refFrom.current?.value ?? '');
  // const [input2, setInput2] = useState<string>(refTo.current?.value ?? '');

  useEffect(() => {
    const val1 = refFrom.current?.value ?? '';
    const val2 = refTo.current?.value ?? '';
    // setInput1(val1);
    // setInput2(val2);
    onValueChange?.(val1, val2);
  }, []);

  const swapValues = (event: React.FormEvent) => {
    event.preventDefault();
    const input1 = refFrom.current?.value ?? '';
    const input2 = refTo.current?.value ?? '';
    const [newInput1, newInput2] = swapValuesGeneric(input1, input2);

    // setInput1(newInput1);
    // setInput2(newInput2);

    // if (refFrom.current) refFrom.current.value = newInput1;
    // if (refTo.current) refTo.current.value = newInput2;
    onValueChange?.(newInput1, newInput2);
  };

  return (
    <>
      <a
        className="icon-change-btn cursor-pointer hover:text-blue-500"
        onClick={swapValues}>
        <ArrowsRightLeftIcon className="w-5 h-5 inline-block" />
      </a>
    </>
  );
};
