import getData from './data.js';

export const data = getData();

export default () => {
  const infos = [
    { description: data.candidate.stack, title: data.labels.interview.stack },
    { description: data.interview.date, title: data.labels.interview.date },
    {
      description: data.interview.language,
      title: data.labels.interview.language,
    },
  ];
  const info = ({ description, title }) => ({
    elements: [
      {
        attributes: { text: title },
        style: { color: 'grey' },
        type: 'dt',
      },
      {
        attributes: { text: description },
        style: { color: 'black', padding: [5] },
        type: 'dd',
      },
    ],
    style: { padding: [20] },
    type: 'dl',
  });
  const recommendation = ({ active, description, title }) => ({
    elements: [
      {
        attributes: { text: title },
        style: { color: active ? 'white' : 'black' },
        type: 'dt',
      },
      {
        attributes: { text: description },
        style: { color: active ? 'white' : 'grey' },
        type: 'dd',
      },
    ],
    style: { background: active ? 'green' : 'grey', padding: 10 },
    type: 'dl',
  });

  // root
  return {
    elements: [
      // sidebar
      {
        elements: [
          {
            attributes: { src: data.brand.logo },
            style: { width: 144 },
            type: 'img',
          },
          {
            attributes: { text: data.candidate.name },
            type: 'h1',
          },
          {
            attributes: { text: data.candidate.headline },
            type: 'h2',
          },
        ]
          .concat(data.interview.recommendations.map(recommendation))
          .concat(infos.map(info)),
        style: { width: '25%' },
      },
      // main
      {
        elements: [
          // overall
          {
            elements: [
              {
                attributes: {
                  title: data.labels.score.overall,
                  type: 'circular',
                  value: 4,
                },
                type: 'chart',
              },
              {
                elements: [
                  { attributes: { text: 'Live Coding Session' }, type: 'h1' },
                  {
                    attributes: {
                      title: 'Live Coding Session',
                      type: 'linear',
                      value: 4,
                    },
                    type: 'chart',
                  },
                ],
                type: 'div',
              },
            ],
            style: { gaps: { x: 144 } },
            type: 'div',
          },
          // feedback
          { attributes: { text: 'Feedback' }, type: 'h1' },
          { attributes: { text: data.interview.feedback }, type: 'p' },
        ],
        style: { width: '75%' },
      },
    ],
    style: { gaps: { x: 144 } },
  };
};
