import React, { useCallback, useEffect, useRef, useState } from "react";

interface ContentEditorProps {
    maxLength: number; // 可選的最大長度屬性
    maxRows?: number;
    minRows?: number;
    onChange?: (value: string) => void;
};

const ContentEditor: React.FC<ContentEditorProps> = ({ maxLength, maxRows = 6, minRows = 1, onChange }) => {
    const [content, setContent] = useState("");
    const editableRef = useRef<HTMLDivElement>(null); // 參考 contentEditable 的元素
    const setLimitRow = useCallback((iEle: HTMLElement | null, iMaxRows: number, iMinRows: number) => {
        if (!iEle) return;

        const parentEle = iEle.parentElement;
        if (!parentEle) return;

        // 限制行數 (預防 0)
        const aMaxRow = iMaxRows === 0 ? 1 : iMaxRows;
        const aMinRow = iMinRows === 0 ? 1 : iMinRows;

        // 取得行高 (不含 padding)
        const contentHeight = parseInt(window.getComputedStyle(iEle).lineHeight) || 20;

        // 容器 padding
        const parentCss = window.getComputedStyle(parentEle);
        const parentPadding =
            parseFloat(parentCss.paddingTop) + parseFloat(parentCss.paddingBottom);

        // 設定容器的高度限制
        const wrapperMaxHeight = contentHeight * aMaxRow + parentPadding;
        const wrapperMinHeight = contentHeight * aMinRow;

        // 套用樣式
        parentEle.style.maxHeight = `${wrapperMaxHeight}px`;
        iEle.style.minHeight = `${wrapperMaxHeight}px`;
    }, []);

    useEffect(() => {
        setLimitRow(editableRef.current, maxRows, minRows);
    }, [maxRows, minRows]); // 依賴 maxRows 和 minRows 更新

    const handleInput = () => {
        if (!editableRef.current) return;

        let text = editableRef.current.innerText;
        if (text.length > maxLength) {
            text = text.substring(0, maxLength); // 截斷超過的內容
            editableRef.current.innerText = text; // 更新內容
            const range = document.createRange();
            const sel = window.getSelection();
            if (sel) {
                range.selectNodeContents(editableRef.current);
                range.collapse(false);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }

        const html = editableRef.current.innerHTML;
        setContent(html);
        if (onChange) {
            onChange(html);
        }
    };

    return (
        <div className="overflow-auto inset-shadow-sm inset-shadow-gray-500 min-w-100 w-100">
            <div
                ref={editableRef}
                className="focus:outline-none w-100"
                contentEditable="true"
                onInput={handleInput}
            />
            <input type="hidden" value={content} />
        </div>
    );
};
export default ContentEditor;
