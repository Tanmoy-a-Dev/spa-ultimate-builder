/*
To allow the user to edit the text and style of a component, you can add an EditableElement component that wraps the existing components and provides editable properties.

Here's an example of how you could modify the allElements array to include editable properties:
*/
const allElements = [
  {
    id: 'section',
    component: ({ text, style }) => (
      <section className="handle" style={style}>
        {text}
      </section>
    ),
    editableProps: [
      {
        propName: 'text',
        label: 'Text',
        type: 'text',
      },
      {
        propName: 'style',
        label: 'Style',
        type: 'object',
        properties: [
          {
            propName: 'backgroundColor',
            label: 'Background Color',
            type: 'text',
          },
          {
            propName: 'color',
            label: 'Text Color',
            type: 'text',
          },
          {
            propName: 'fontSize',
            label: 'Font Size',
            type: 'text',
          },
        ],
      },
    ],
  },
  // other components...
];

/**
 * In the above code, we've added an editableProps array to each component object, which contains an array of editable properties. Each editable property has a propName (the name of the property on the component), a label (the label to display in the editor), and a type (the type of input to display in the editor).

For properties of type object, we can define nested properties arrays to allow the user to edit specific properties of the object.

Now we can create an EditableElement component that takes an element prop and renders the appropriate component with editable properties:
 */

const EditableElement = ({ element, onElementChange }) => {
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = (newProps) => {
    setEditing(false);
    onElementChange(newProps);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const ElementComponent = allElements.find(
    (singleElement) => singleElement.id === element
  ).component;

  const editableProps = allElements.find(
    (singleElement) => singleElement.id === element
  ).editableProps;

  if (editing) {
    return (
      <ElementEditor
        element={element}
        editableProps={editableProps}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    );
  } else {
    return (
      <div className="relative">
        <div
          className="absolute top-0 right-0 cursor-pointer"
          onClick={handleEdit}
        >
          Edit
        </div>
        <ElementComponent {...element} />
      </div>
    );
  }
};

/**
 * In the EditableElement component, we first find the appropriate component object and its editable properties using allElements.find(). We then conditionally render an ElementEditor component if the user is editing the element, or the component itself with an "Edit" button if they are not.

The ElementEditor component is responsible for rendering the input fields for each editable property:
 */

import { useState } from 'react';

const ElementEditor = ({ element, editableProps, onSave, onCancel }) => {
  const [props, setProps] = useState(element);

  const handlePropChange = (propName, value) => {
    setProps((prevProps) => ({
      ...prevProps,
      [propName]: value,
    }));
  };

  const handleSave = () => {
    onSave(props);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-medium mb-4">Edit Element</h2>
      {editableProps.map((prop) => (
        <div key={prop.propName} className="mb-4">
          <label className="block font-medium mb-2">{prop.label}</label>
          <input
            type="text"
            className="block w-full rounded border-gray-400 py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
            value={props[prop.propName]}
            onChange={(e) => handlePropChange(prop.propName, e.target.value)}
          />
        </div>
      ))}
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ElementEditor;

/**
     * To add the functionality of editing the text and style of the singleElement.component, you can add some input fields and use useState hooks to manage the values of the fields.

Here's an example of how you could modify the code to add this functionality:
     */

const [text, setText] = useState('Hello'); // default text
const [style, setStyle] = useState({
  border: '2px solid gray',
  minWidth: '100px',
  minHeight: '100px',
}); // default style

const allElements = [
  {
    id: 'section',
    component: (
      <section
        className="handle"
        style={style}
        contentEditable={true}
        onInput={(e) => setText(e.target.innerText)}
      >
        {text}
      </section>
    ),
  },
];

const handleStyleChange = (event) => {
  const { name, value } = event.target;
  setStyle((prevStyle) => ({
    ...prevStyle,
    [name]: value,
  }));
};

return (
  <div className="bg-white border-gray-300 border w-full relative h-full">
    <div>
      <label htmlFor="border">Border: </label>
      <input
        type="text"
        name="border"
        value={style.border}
        onChange={handleStyleChange}
      />
    </div>
    <div>
      <label htmlFor="minWidth">Minimum Width: </label>
      <input
        type="text"
        name="minWidth"
        value={style.minWidth}
        onChange={handleStyleChange}
      />
    </div>
    <div>
      <label htmlFor="minHeight">Minimum Height: </label>
      <input
        type="text"
        name="minHeight"
        value={style.minHeight}
        onChange={handleStyleChange}
      />
    </div>
    {elementList.map((element, index) => (
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
        {allElements.find(
          (singleElement) =>
            singleElement.id == element && (
              <div onClick={() => handleSelectElement(index)}>
                {singleElement.component}
              </div>
            )
        )}
      </Draggable>
    ))}
  </div>
);
/**
 * In this modified code, we added two useState hooks: one to manage the text of the component, and another to manage the style object of the component. We also modified the component object to use the text state and the style state.

To allow users to edit the text, we added the contentEditable attribute to the component object and set the onInput event handler to update the text state whenever the content is changed.

To allow users to edit the style of the component, we added three input fields for the border, minWidth, and minHeight properties of the style object. We also added a handleStyleChange function to update the style state whenever one of the input fields is changed.

With these modifications, users should be able to edit both the text and style of the singleElement.component.
 */
