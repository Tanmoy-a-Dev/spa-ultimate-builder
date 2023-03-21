import React, { useState } from 'react';
import Draggable from 'react-draggable';
import StyleManager from '../../components/designSite/StyleManager';

const DesignPage = () => {
  const [elementList, setElementList] = useState([]); // array to store the elements added to canvas
  const [activeElement, setActiveElement] = useState(null); // state to keep track of the currently active element

  const allElements = [
    {
      id: 'section',
      component: '<section className="handle">Hello</section>',
      style: {
        border: '2px solid #6B7280',
        minWidth: '100px',
        minHeight: '100px',
      },
    },
    {
      id: 'pg',
      component: '<p className="handle">Hello</p>',
      style: {
        border: '2px solid #6B7280',
        minWidth: '50px',
        minHeight: '50px',
      },
    },
  ];

  // function to handle adding elements to canvas
  const handleAddElement = (element) => {
    setElementList([...elementList, element]);
  };

  // function to handle selecting an element
  const handleSelectElement = (id) => {
    setActiveElement(id);
  };

  return (
    <div className="flex h-screen">
      {/* elements section on left */}
      <div className="bg-gray-200 w-1/4 p-4">
        <h2 className="text-lg font-bold mb-4">Elements</h2>
        <div className="flex flex-wrap">
          <div
            className="bg-white border-gray-300 border rounded-lg p-2 m-1 cursor-move"
            onClick={() => handleAddElement('section')}
          >
            Section
          </div>
          <div
            className="bg-white border-gray-300 border rounded-lg p-2 m-1 cursor-move"
            onClick={() => handleAddElement('pg')}
          >
            paragraph
          </div>
          <button
            className="bg-white border-gray-300 border rounded-lg p-2 m-1 cursor-move"
            onClick={() => handleAddElement('Element 3')}
          >
            Element 3
          </button>
        </div>
      </div>
      {console.log(activeElement)}

      {/* canvas section in center */}
      {/* <div className="flex-grow p-4"> */}
      {/* <h2 className="text-lg font-bold mb-4">Canvas</h2> */}
      <div className="bg-white border-gray-300 border w-full relative h-full">
        {elementList.map((element, index) => {
          const singleElement = allElements.find((el) => el.id == element);
          console.log({ singleElement });
          if (singleElement) {
            return (
              <Draggable
                key={index}
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                // grid={[25, 25]}
                bounds="parent"
                onStart={() => handleSelectElement(index)}
                onStop={() => setActiveElement(null)}
                disabled={index !== activeElement}
              >
                <div
                  onClick={() => handleSelectElement(index)}
                  dangerouslySetInnerHTML={{
                    __html: singleElement.component,
                  }}
                  // style={singleElement.style}
                ></div>
              </Draggable>
            );
          } else {
            return null;
          }
        })}
      </div>
      {/* </div> */}

      {/* style, style manager and settings section on right */}
      <StyleManager />
    </div>
  );
};

export default DesignPage;
