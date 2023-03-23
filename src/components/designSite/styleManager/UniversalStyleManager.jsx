// react-icons
import { useState } from 'react';
import { GiLargePaintBrush } from 'react-icons/gi';
import { IoSettings } from 'react-icons/io5';
import { MdStyle, MdElectricBolt } from 'react-icons/md';
import ElemSettingsTabComponent from '../tabElements/ElemSettingsTabComponent';
import InteractionsTabComponent from '../tabElements/InteractionsTabComponent';
import StyleManagerTabComponent from '../tabElements/StyleManagerTabComponent';
import StyleTabComponent from '../tabElements/StyleTabComponent';

export default function UniversalStyleManager({ activeElement }) {
  const [activeTab, setActiveTab] = useState('style');
  const handleTabClick = (e) => {
    // console.log(e.currentTarget.id);
    setActiveTab(e.currentTarget.id);
    // const tooltipDivs = document.querySelectorAll('.tooltip');
    // tooltipDivs.forEach((div, i) => {
    //   if (i === index) {
    //     div.classList.toggle('hidden');
    //   } else {
    //     div.classList.add('hidden');
    //   }
    // });
  };
  return (
    <div className="bg-secondaryColor w-[241px] h-screen p-0 absolute top-0 right-0 bottom-0 ">
      {/* {console.log(activeTab)} */}
      {/* tabs */}
      <div className="flex h-9">
        <button
          // data-tooltip-target="tooltip-default"
          title="Style (S)"
          type="button"
          id="style"
          className={`style_section_icons_div flex-1  ${
            activeTab === 'style' && 'bg-accentColor'
          }`}
          onClick={(e) => handleTabClick(e)}
        >
          <div>
            <GiLargePaintBrush className="style_section_icons" />
          </div>
        </button>

        <button
          id="elementSettings"
          title="Element Settings"
          className={`style_section_icons_div flex-1   ${
            activeTab == 'elementSettings' && 'bg-accentColor'
          }`}
          onClick={(e) => handleTabClick(e)}
        >
          <div>
            <IoSettings className="style_section_icons" />
          </div>
        </button>
        <button
          id="styleManager"
          title="Style Manager"
          className={`style_section_icons_div flex-1   ${
            activeTab == 'styleManager' && 'bg-accentColor'
          }`}
          onClick={(e) => handleTabClick(e)}
        >
          <div>
            <MdStyle className="style_section_icons" />
          </div>
        </button>
        <button
          id="interactions"
          title="Interactions"
          className={`style_section_icons_div flex-1 ${
            activeTab == 'interactions' && 'bg-accentColor'
          }`}
          onClick={(e) => handleTabClick(e)}
        >
          <div>
            <MdElectricBolt className="style_section_icons" />
          </div>
        </button>
      </div>
      {/* tab elements */}
    </div>
  );
}
