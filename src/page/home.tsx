import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

export function Home() {

    return (<>
        <form name="form1" className="mainForm">
            <div className="form">
                <div className="form_table">

                </div>
            </div>
        </form>
    </>
    )
}


const element = document.getElementById("react-item") as HTMLElement;
if (element) {
    element.style.width = '100%';
    const root = createRoot(element);
    root.render(<StrictMode><Home /></StrictMode>);
}
