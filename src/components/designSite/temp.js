const handleTabClick = (index) => {
  const tooltipDivs = document.querySelectorAll('.tooltip');
  tooltipDivs.forEach((div, i) => {
    if (i === index) {
      div.classList.toggle('hidden');
    } else {
      div.classList.add('hidden');
    }
  });
};
return (
  <div className="bg-gray-200 w-1/4 p-4 flex justify-between items-center">
    <div className="relative">
      <GiLargePaintBrush
        className="style_section_icons"
        onClick={() => handleTabClick(0)}
      />
      {/* <button className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded">
          Style
        </button> */}
      <div className="absolute top-full left-0 bg-white shadow-md py-2 px-4 mt-1 hidden">
        <p className="text-gray-700">This is the Style tab.</p>
      </div>
    </div>
    <div className="relative">
      <IoSettings
        className="style_section_icons"
        onClick={() => handleTabClick(1)}
      />
      {/* <button className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded">
          Element Settings
        </button> */}
      <div className="absolute top-full left-0 bg-white shadow-md py-2 px-4 mt-1 hidden">
        <p className="text-gray-700">This is the Element Settings tab.</p>
      </div>
    </div>
    <div className="relative">
      <MdStyle
        className="style_section_icons"
        onClick={() => handleTabClick(2)}
      />
      {/* <button className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded">
          Style Manager
        </button> */}
      <div className="absolute top-full left-0 bg-white shadow-md py-2 px-4 mt-1 hidden">
        <p className="text-gray-700">This is the Style Manager tab.</p>
      </div>
    </div>
    <div className="relative">
      <MdElectricBolt
        className="style_section_icons"
        onClick={() => handleTabClick(3)}
      />
      {/* <button className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded">
          Interactions
        </button> */}
      <div className="absolute top-full left-0 bg-white shadow-md py-2 px-4 mt-1 hidden">
        <p className="text-gray-700">This is the Interactions tab.</p>
      </div>
    </div>
  </div>
);
