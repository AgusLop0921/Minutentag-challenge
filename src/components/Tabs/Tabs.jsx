import React, { useState } from "react";
import "./styles.css";

export function Tabs({ tabs }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTabIndex === index ? "active" : ""}`}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tabs-content">{tabs[activeTabIndex].content}</div>
    </div>
  );
}
