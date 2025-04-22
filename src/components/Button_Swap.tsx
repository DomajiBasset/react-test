import React, { useEffect, useState } from "react";
import { swapValuesGeneric } from "../helpers/utils";
import { dataExchange, SwapInput } from "../config/exchange.config";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";
import { SearchInput } from "./InputSearch";

type Props = {
  iData?: SwapInput;
  onValueChange?: (val1: string, val2: string) => void;
};
// props 是 React 元件的第一個參數	一定是物件形式 {}
export default function Button_Swap({ iData = dataExchange, onValueChange }: Props) {
  // 定義狀態來儲存兩個輸入框的值
  const [input1, setInput1] = useState(iData.val1);
  const [input2, setInput2] = useState(iData.val2);
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
    margin: '0 20px'
  }

  // 定義交換值的函式
  const swapValues = (event: React.FormEvent) => {
    event.preventDefault(); // 阻止表單的預設送出行為
    const [newInput1, newInput2] = swapValuesGeneric(input1, input2);
    setInput1(newInput1);
    setInput2(newInput2);
    notifyChange(newInput1, newInput2);
  };
  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput1(value);
    notifyChange(value, input2);
  };
  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput2(value);
    notifyChange(input1, value);
  };

  return (
    <>
      <SearchInput
        iData={{ type1: "text", size1: 30 }}
        suggestions={["台北", "台中", "台南", "高雄", "基隆", "新竹"]}
      />
      <input
        type={iData.type1}
        size={iData.size1}
        value={input1}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleChange1}
      />

      <a style={aStyle}
        className="icon-change-btn cursor-pointer hover:text-blue-500"
        onClick={swapValues}>
        <ArrowsRightLeftIcon className="w-5 h-5 inline-block" />
      </a>

      <input
        type={iData.type2}
        size={iData.size2}
        value={input2}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleChange2}
      />
    </>
  );
}
