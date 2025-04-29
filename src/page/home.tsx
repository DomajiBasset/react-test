import React, { useState, useReducer, useEffect } from "react";
import SwapButton from "../components/SwapButton.js";
import AreaWrapper from "../components/Area.js";
import PickArea from "../components/PickArea.js";
import ContentEditor from "../components/ContentEditor.js";
import DatePickerTest from "../components/DatePickerTest.js";
import { formReducer, FormState } from "../reducer/formReducer.js";
import { useNavigate } from "react-router";
import { useTheme } from "../reducer/ThemeContext.js";
import { SubmitButton } from "../components/base/Button.js";
import '../style/home.scss';
import HomeSwiper from "../components/Carousel.js";
import { isNullOrEmpty } from "../helpers/utils.js";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";
import DateRange from "../components/DateRange.js";

export const Home = () => {
  const ns = 'home';
  const { dispatch } = useTheme();
  const navigate = useNavigate();
  const [showDate, setShowDate] = useState(false);
  useEffect(() => {
    dispatch({ type: 'setNameSpace', ns: ns });
  }, [dispatch]);

  const [formList, setFormList] = useState<FormState[]>([]);
  const [form, formDispatch] = useReducer(formReducer, {
    startDate: new Date(),
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
    console.log('fomr set,', form.startPlace);
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
          <SwapButton
            onValueChange={(val1, val2) => {
              console.log(123);
              formDispatch({ type: "SET_START_PLACE", payload: val1 });
              formDispatch({ type: "SET_END_PLACE", payload: val2 });
            }}
          />
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
