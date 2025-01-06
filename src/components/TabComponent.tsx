import React, { useState } from 'react';
interface TabComponentProps {
  children: React.ReactNode;
  previousButtonText?: string;
  nextButtonText?: string;
}

const TabComponent: React.FC<TabComponentProps> = React.memo(({
  children,
  previousButtonText = 'Tab trước',
  nextButtonText = 'Tab sau',
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = React.Children.toArray(children) as React.ReactElement[];

  return (
    <div className="tab-container flex flex-col  min-h-[400px]">
      {/* Tab buttons */}
      <div className="flex w-full">
        <button
          onClick={() => setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length)}
          className={`w-1/2 py-2 rounded-l  border font-medium ${activeTab === 0
            ? 'border-green-200 bg-green-500 text-white'
            : 'border-gray-200 bg-green-100'
            }`}
        >
          {previousButtonText}
        </button>
        <button
          onClick={() => setActiveTab((prev) => (prev + 1) % tabs.length)}
          className={`w-1/2 py-2 rounded-r  border font-medium ${activeTab === 1
            ? 'border-green-200 bg-green-500 text-white'
            : 'border-gray-200 bg-green-100'
            }`}
        >
          {nextButtonText}
        </button>
      </div>

      {/* Tab content with fixed height */}
      <div className="tabs-wrapper mt-2 h-full " >
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane ${activeTab === index ? 'block' : 'hidden'
              } w-full h-full`}
          >
            <div className="h-full">{tab.props.children}</div>
          </div>
        ))}
      </div>
    </div>
  );
});


export default TabComponent;



