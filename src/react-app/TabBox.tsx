import { useState } from 'react';
import './TabBox.css'

interface TabBoxProps {
  sectionTitle: string;
  tabs: { [key: string]: {title: string, description: string}[] } // array of subsections, each having a title and desc
}

const TabBox: React.FC<TabBoxProps> = ( {sectionTitle, tabs} ) => {
  const [currentTab, setCurrentTab] = useState(Object.keys(tabs)[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
  return (
    <>
    <div className="tab-box">
      <div className="tab-box-section-title">
        {sectionTitle}
      </div>
      <div className="tab-box-row">
        <div className="tab-box-sidebar">
          <button className="tab-box-toggle-sidebar" onClick={toggleSidebar}>
            {sidebarOpen ? "✖" : "☰"}
          </button>
          <ul className={`tab-box-sidebar-list ${sidebarOpen ? 'active' : ''}`}> 
            {Object.keys(tabs).map((tabName, index) => (
              <li key={index}> <button onClick={() => {setCurrentTab(tabName); setSidebarOpen(false)}}>{tabName}</button> </li>
            ))}
          </ul>
        </div>
        <div className={`tab-box-content ${sidebarOpen ? 'active' : ''}`}>
          {tabs[currentTab].map((section: {title: string, description: string}) => (
            <>
            <div className="tab-box-header">
              {section.title}
            </div>
            <div className="tab-box-desc">
              {section.description}
            </div>
            </>
          ))
          }
        </div>
      </div>
    </div>
    </>
  );
}

export default TabBox;