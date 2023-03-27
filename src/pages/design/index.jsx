import React, { useState } from 'react';
import { renderToString } from 'react-dom/server';
import Draggable from 'react-draggable';
import StyleManager from '../../components/designSite/styleManager/UniversalStyleManager';
import { allElements } from '../../helpers/constants';

export default function DesignPage() {
  const [elementList, setElementList] = useState([]); // array to store the elements added to canvas
  const [activeElement, setActiveElement] = useState(null); // state to keep track of the currently active element

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
          <button
            className="bg-white border-gray-300 border rounded-lg p-2 m-1 cursor-move"
            onClick={() => handleAddElement('section')}
          >
            Section
          </button>
          <button
            className="bg-white border-gray-300 border rounded-lg p-2 m-1 cursor-move"
            onClick={() => handleAddElement('pg')}
          >
            paragraph
          </button>
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
          console.log({ component: singleElement });
          if (singleElement) {
            return (
              <Draggable
                key={index}
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[25, 25]}
                bounds="parent"
                onStart={() => handleSelectElement(index)}
                onStop={() => setActiveElement(null)}
                disabled={index !== activeElement}
              >
                <div
                  onClick={() => handleSelectElement(index)}
                  dangerouslySetInnerHTML={{
                    __html: renderToString(singleElement.component),
                  }}
                  // style={singleElement.style}
                  className="w-full"
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
}
