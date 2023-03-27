import Section from '../components/design/section';

export const allElements = [
  {
    id: 'section',
    component: <Section />,
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

// module.exports = { allElements };
