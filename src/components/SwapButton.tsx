import React, { useEffect, useState } from "react";
import { swapValuesGeneric } from "../helpers/utils";
import { defaultData, SwapInput } from "../config/swap.config";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";
import { SearchInput } from "./SearchInput";

type Props = {
  data?: SwapInput;
  onValueChange?: (val1: string, val2: string) => void;
};
// props 是 React 元件的第一個參數	一定是物件形式 {}
export default function SwapButton({ data: dataSwap = defaultData, onValueChange }: Props) {
  // 定義狀態來儲存兩個輸入框的值
  const [input1, setInput1] = useState(dataSwap.val1);
  const [input2, setInput2] = useState(dataSwap.val2);
  const notifyChange = (val1: string, val2: string) => {
    onValueChange?.(val1, val2); // 如果有 callback 就呼叫
  };

  // 初始時回傳預設值給父層
  useEffect(() => {
    onValueChange?.(input1, input2);
  }, []);

  //&nbsp; 寬度不一樣
  const aStyle = {
    cursor: 'pointer',
  }

  // 定義交換值的函式
  const swapValues = (event: React.FormEvent) => {
    event.preventDefault(); // 阻止表單的預設送出行為
    const [newInput1, newInput2] = swapValuesGeneric(input1, input2);
    setInput1(newInput1);
    setInput2(newInput2);
    notifyChange(newInput1, newInput2);
  };

  return (
    <>
      <div className="flex items-center space-x-2">
        <SearchInput
          data={{ type: dataSwap.type1, size: dataSwap.size1, value: input1 }}
          suggestions={["台北", "台中", "台南", "高雄", "基隆", "新竹"]}
          onChange={setInput1}
        />
        <a style={aStyle}
          className="icon-change-btn cursor-pointer hover:text-blue-500"
          onClick={swapValues}>
          <ArrowsRightLeftIcon className="w-5 h-5 inline-block" />
        </a>
        <SearchInput
          data={{ type: dataSwap.type2, size: dataSwap.size2, value: input2 }}
          suggestions={["台北", "台中", "台南", "高雄", "基隆", "新竹"]}
          onChange={setInput2}
        />
      </div>
    </>
  );
}
