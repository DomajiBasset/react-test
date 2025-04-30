import React, { useState, useReducer, useEffect, useRef } from "react";
import SwapButton from "../components/SwapButton.js";
import AreaWrapper from "../components/Area.js";
import PickArea from "../components/PickArea.js";
import ContentEditor from "../components/ContentEditor.js";
import HomeSwiper from "../components/Carousel.js";
import DateRange from "../components/DateRange.js";
import { formReducer, FormState } from "../reducer/formReducer.js";
import { useNavigate } from "react-router";
import { useTheme } from "../reducer/ThemeContext.js";
import { SubmitButton } from "../components/base/Button.js";
import { isNullOrEmpty } from "../helpers/utils.js";
import { SearchInput } from "../components/SearchInput.js";
import '../style/home.scss';

export const Home = () => {
  const ns = 'home';
  const { dispatch } = useTheme();
  const navigate = useNavigate();
  const [showDate, setShowDate] = useState(false);
  const refFrom = useRef<HTMLInputElement>(null);
  const refTo = useRef<HTMLInputElement>(null);
  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');

  useEffect(() => {
    dispatch({ type: 'setNameSpace', ns: ns });
  }, [dispatch]);

  const [formList, setFormList] = useState<FormState[]>([]);
  const [form, formDispatch] = useReducer(formReducer, {
    startDate: new Date(),
    endDate: new Date(),
    pickAreaValue: [],
    text: "",
    startPlace: "",
    endPlace: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedDate = form.startDate.toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });

    console.log('表單送出！選擇的日期是：', formattedDate);
    console.log('表單送出！：', form.pickAreaValue);
    console.log('表單送出！：', form.text);
    console.log('表單送出！：', form.startPlace, '->', form.endPlace);
    const newFormList = [...formList, form];
    setFormList(newFormList);
    navigate("/purchase", { state: newFormList });
  };

  useEffect(() => {
    if (!showDate) {
      setShowDate(!isNullOrEmpty(form.startPlace));
    }
  }, [form]);

  // 🎯 額外挑戰（進階任務）
  // ✅ 加入刪除單筆資料按鈕

  // ✅ 資料可編輯（按下後自動填入表單欄位）

  // ✅ 使用表格顯示（HTML table 或其他 UI 框架）

  // ✅ 儲存至 localStorage，刷新頁面資料不會消失
  const aStyle: React.CSSProperties = {
    margin: '0px',
    padding: '0px',
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  };

  return (<>
    <HomeSwiper></HomeSwiper>
    <form name="form1" className="mainForm px-10" onSubmit={handleSubmit}>
      <div style={aStyle}>
        <AreaWrapper label="FROMTO" className="pt-5" labelClassName="border-t-3 border-gray-500">
          <div className="flex items-center py-3">
            <SearchInput
              ref={refFrom}
              suggestions={["台北", "台中", "台南", "高雄", "基隆", "新竹"]}
              onValueChange={(val) => { setInput1(val) }}
              placeholderCode="FROM"
              value={input1}
            />
            <div className="px-5">
              <SwapButton
                refFrom={refFrom}
                refTo={refTo}
                onValueChange={(val1, val2) => {
                  setInput1(val1);
                  formDispatch({ type: "SET_START_PLACE", payload: val1 });
                  setInput2(val2);
                  formDispatch({ type: "SET_END_PLACE", payload: val2 });
                }}
              />
            </div>
            <SearchInput
              ref={refTo}
              suggestions={["台北", "台中", "台南", "高雄", "基隆", "新竹"]}
              onValueChange={(val) => { setInput2(val) }}
              placeholderCode="TO"
              value={input2}
            />
          </div>
        </AreaWrapper>

        {showDate && <AreaWrapper label="DATE" childrenClassName="">
          <>
            <DateRange
              startDate={form.startDate}
              onStartChange={(date) => formDispatch({ type: "SET_START_DATE", payload: date as Date })}
              endDate={form.endDate}
              onEndChange={(date) => formDispatch({ type: "SET_END_DATE", payload: date as Date })}
            />
          </>
        </AreaWrapper>}
      </div>

      <PickArea
        value={form.pickAreaValue}
        setValue={(val) => formDispatch({ type: "SET_PICK_AREA", payload: val })}
      />
      <AreaWrapper label="CE">
        <ContentEditor
          maxLength={100}
          maxRows={5}
          minRows={3}
          onChange={(val) => formDispatch({ type: "SET_TEXT", payload: val })}
        />
      </AreaWrapper>
      <div className="flex justify-end">
        <SubmitButton
          textCode="BUY"
          className="m-2 px-4 py-2 w-20"
        />
      </div>
    </form>
  </>);
}
