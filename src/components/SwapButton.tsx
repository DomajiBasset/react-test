import React, { useEffect, useState } from "react";
import { swapValuesGeneric } from "../helpers/utils";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";

type Props = {
  refFrom: React.RefObject<HTMLInputElement | null>;
  refTo: React.RefObject<HTMLInputElement | null>;
  onValueChange?: (val1: string, val2: string) => void;
};

export default function SwapButton({ refFrom, refTo, onValueChange }: Props) {

  useEffect(() => {
    const val1 = refFrom.current?.value ?? '';
    const val2 = refTo.current?.value ?? '';

    onValueChange?.(val1, val2);
  }, []);

  const swapValues = (event: React.FormEvent) => {
    event.preventDefault();
    const input1 = refFrom.current?.value ?? '';
    const input2 = refTo.current?.value ?? '';
    const [newInput1, newInput2] = swapValuesGeneric(input1, input2);

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
