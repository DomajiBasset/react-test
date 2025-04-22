import React, { useState, useReducer } from "react";
import SwapButton from "../components/SwapButton.js";
import AreaWrapper from "../components/Area.js";
import PickArea from "../components/PickArea.js";
import ContentEditor from "../components/ContentEditor.js";
import DatePickerTest from "../components/DatePickerTest.js";
import { formReducer, FormState } from "../reducer/formReducer.js";
import { DataList } from "../components/DataList.js";
import { useNavigate } from "react-router";
import '../style/main.scss';

export const Home = () => {
  const navigate = useNavigate();

  const [formList, setFormList] = useState<FormState[]>([]);
  const [form, dispatch] = useReducer(formReducer, {
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
    setFormList([...formList, form]); // form 是你目前 useReducer 的 state
    navigate("/purchase");
    // navigate('/newPage');
    // console.log("送出資料：", form);
    // 這邊可以送出 API、表單資料等
  };

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
    // 'borderWidth': '1px',
    // 'borderStyle': 'solid none none solid',
    // 'borderColor': 'rgb(113, 192, 244)'
  }

  return (<>
    <form name="form1" className="mainForm" onSubmit={handleSubmit}>
      <div style={aStyle}>
        <AreaWrapper label="*起訖">
          <SwapButton
            onValueChange={(val1, val2) => {
              dispatch({ type: "SET_START_PLACE", payload: val1 });
              dispatch({ type: "SET_END_PLACE", payload: val2 });
            }}
          />
        </AreaWrapper>

        <AreaWrapper label="*日期" childrenClassName="col2">
          <DatePickerTest
            value={form.startDate}
            onChange={(date) => dispatch({ type: "SET_START_DATE", payload: date as Date })}
          />
        </AreaWrapper>

        <AreaWrapper label="TEST" childrenClassName="col2">
          <>
            <div></div>
          </>
        </AreaWrapper>

        <AreaWrapper label="CE">
          <ContentEditor
            maxLength={100}
            maxRows={5}
            minRows={3}
            onChange={(val) => dispatch({ type: "SET_TEXT", payload: val })}
          />
        </AreaWrapper>
      </div>

      <PickArea
        value={form.pickAreaValue}
        setValue={(val) => dispatch({ type: "SET_PICK_AREA", payload: val })}
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="m-2 px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
        // onClick={handleSubmit}
        >
          購票
        </button>
      </div>
      <DataList data={formList} />
    </form>
  </>);
};
