import React, { StrictMode, useEffect, useRef, useState } from "react";
import { createRoot, Root } from "react-dom/client";
import '../style/main.scss';
import InputSection from "../components/InputSection";
import $ from 'jquery';

const Row = (({ text }: { text: string }) => {
  return <div className="row">{text}</div>;
});
const ReactApp = (({ count, dataVersion, onRendered, shouldMeasure }: {
  count: number;
  dataVersion: number;
  onRendered: () => void;
  shouldMeasure: boolean;
}) => {
  const [data, setData] = useState<string[]>([]); // 綁定實際顯示內容
  // const data = Array.from({ length: count }, (_, i) => `React項目 ${i}`);
  const hasMeasuredRef = useRef(false);  // 用來避免重複測量
  hasMeasuredRef.current = false;

  // 初始化資料或 count 改變時建立項目
  useEffect(() => {
    const newData = Array.from({ length: count }, (_, i) => `React項目 ${i}`);
    setData(newData);
  }, [count]);

  // 當 dataVersion 改變時，模擬「更新文字」
  useEffect(() => {
    setData(prev => {
      // 只更新前 dataVersion 項目
      const newData = [...prev];
      for (let i = 0; i < dataVersion && i < count; i++) {
        newData[i] = `更新React項目 ${i}`;
      }
      return newData;
    });
  }, [dataVersion]);

  useEffect(() => {
    if (hasMeasuredRef.current || !shouldMeasure) return;
    hasMeasuredRef.current = true;
    const label = 'React Update';
    console.time(label);

    // 等待下一幀畫面更新完成後再記錄時間
    requestAnimationFrame(() => {
      console.timeEnd(label);
      onRendered(); // callback 通知父層
    });
  }, [shouldMeasure]);

  useEffect(() => {
    if (typeof window.$ === 'undefined') {
      const script = document.createElement('script');
      script.src = "https://code.jquery.com/jquery-3.7.2.min.js";
      script.async = true;
      script.onload = () => {
      };
      document.body.appendChild(script);
    }

    return () => {
      // 可選清理：移除 jQuery
      const script = document.querySelector('script[src="https://code.jquery.com/jquery-3.7.2.min.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <Row key={index} text={item} />
      ))}
    </div>
  );
});

function createNativeDOM(iCount: number): Promise<void> {
  return new Promise((resolve) => {
    const data = Array.from({ length: iCount }, (_, i) => `vanilla項目 ${i}`);
    const container = document.getElementById('vanilla-test') as HTMLElement;
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    console.time('vanilla Update');
    data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'row';
      const text = document.createTextNode(item);
      div.appendChild(text);
      fragment.appendChild(div);
    });
    container.appendChild(fragment);
    console.timeEnd('vanilla Update');
    resolve();
  });
}

function createjQueryDOM(iCount: number): Promise<void> {
  return new Promise((resolve) => {
    const data = Array.from({ length: iCount }, (_, i) => `jq項目 ${i}`);
    const $container = $('#jquery-test');
    $container.empty();
    console.time('jQuery Update');
    data.forEach(item => {
      const $div = $('<div></div>').addClass('row').text(item);
      $container.append($div);
    });
    console.timeEnd('jQuery Update');
    resolve();
  });
}

function updatePartialNativeDOM(iCount: number): Promise<void> {
  return new Promise((resolve) => {
    const container = document.getElementById('vanilla-test')!;
    console.time('Vanilla Partial Update');

    for (let i = 0; i < iCount; i++) {
      const row = container.children[i];
      if (row) {
        row.textContent = `更新vanilla項目 ${i} }`;
      }
    }

    console.timeEnd('Vanilla Partial Update');
    resolve();
  });
}

function updatejQueryDOM(iCount: number): Promise<void> {
  return new Promise((resolve) => {
    const $container = $('#jquery-test');
    const $children = $container.children().toArray();

    console.time('jQuery Update');
    for (let i = 0; i < iCount; i++) {
      const row = $children[i];
      if (row) {
        row.textContent = `更新jq項目 ${i}}`;
      }
    }
    console.timeEnd('jQuery Update');
    resolve();
  });
}

export function TestEfficiencyPage() {
  const [count, setCount] = useState(0);
  const [updatecount, setUpdateCount] = useState(0);
  const [isBtnDisabled, setBtnDisabled] = useState<boolean>(false);
  const [shouldMeasure, setShouldMeasure] = useState(false);
  const countRef = useRef(count);  // 使用 useRef 保存 count
  const updatecountRef = useRef(updatecount);  // 使用 useRef 保存 count
  const hasMeasuredRef = useRef(false);

  const handleClick = async () => {
    setBtnDisabled(true);
    await createNativeDOM(count);
    await createjQueryDOM(count);
    // hasMeasuredRef.current = false;
    countRef.current = count; // 更新 ref 中的 count
    setShouldMeasure(true);
  }
  const handleClick_Update = async () => {
    setBtnDisabled(true);
    await updatePartialNativeDOM(updatecount);
    await updatejQueryDOM(updatecount);
    // hasMeasuredRef.current = false;
    updatecountRef.current = updatecount; // 更新 ref 中的 count
    setShouldMeasure(true);
  }
  const handleAppRender = () => {
    setBtnDisabled(false);
    setShouldMeasure(false);
  }

  return (<>
    <form name="form1" className="mainForm w-full max-w-4xl mx-auto py-6 px-4">

      <div className="form">
        <div className="form_table space-y-6">
          <div className="flex flex-col items-center space-y-5">
            <InputSection
              value={count}
              setValue={setCount}
              onClick={handleClick}
              buttonLabel="開始測試"
              disabled={isBtnDisabled}
            ></InputSection>
            <InputSection
              value={updatecount}
              setValue={setUpdateCount}
              onClick={handleClick_Update}
              buttonLabel="更新測試"
              disabled={isBtnDisabled}
            ></InputSection>

            <div className="flex items-center justify-center space-x-6">
              <div id="react-test" className="">
                <ReactApp count={countRef.current} dataVersion={updatecountRef.current} onRendered={handleAppRender} shouldMeasure={shouldMeasure} />
              </div>
              <div id="jquery-test" className="mx-10"></div>
              <div id="vanilla-test"></div>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div className="divider"></div>
  </>)
}
