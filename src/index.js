import { createWriteStream } from 'fs';
import update from 'immutability-helper';
import PDFDocument from 'pdfkit';

import getData from './data.js';
import getLayout from './layout.js';

export const data = getData();

export const layout = getLayout();

export const getMetaFrom = ({
  options: {
    margins: { bottom, left, right, top },
    size: [width, height],
  },
}) => ({
  height: height - (bottom + top),
  width: width - (left + right),
  x: left,
  y: top,
});

export const render = (
  { style: { gaps }, elements },
  meta = getMetaFrom(pdf)
) =>
  elements.reduce((stack, settings, index, { length }) => {
    const getDimensionsFrom = ({ style }) => {
      const measure = (
        dimension,
        axis = { height: 'y', width: 'x' }[dimension]
      ) =>
        !isNaN(style[dimension])
          ? style[dimension]
          : (stack[dimension] - (length - 1) * (gaps[axis] || 0)) *
            (parseInt(style[dimension] || 100, 10) / 100);
      const situate = (axis) => stack[axis] + ((!!index && gaps[axis]) || 0);

      return {
        height: measure('height'),
        width: measure('width'),
        x: situate('x'),
        y: situate('y'),
      };
    };
    const element = getDimensionsFrom(settings);

    console.log({ element });

    structure.add(
      pdf.struct('Sect', () =>
        pdf
          .rect(element.x, element.y, element.width, element.height)
          .stroke('#000')
      )
    );

    return update(stack, {
      x: { $apply: (current) => current + element.width },
      // y: { $apply: (current) => current + element.height },
    });
  }, meta);

export const pdf = new PDFDocument({
  info: { Title: `[Report] ${data.candidate.name}`, Author: data.brand.name },
  margins: { top: 24, bottom: 24, left: 24, right: 24 },
  size: [1440, 1440],
  bufferPages: true,
  displayTitle: true,
  lang: 'en-US',
  pdfVersion: '1.7',
  tagged: true,
  title: data.candidate.name,
})
  .registerFont('Lato-Black', 'src/assets/font/Lato-Black.ttf')
  .registerFont('Lato-Bold', 'src/assets/font/Lato-Bold.ttf')
  .registerFont('Roboto-Medium', 'src/assets/font/Roboto-Medium.ttf')
  .registerFont('Roboto-Regular', 'src/assets/font/Roboto-Regular.ttf');

export const structure = pdf.struct('Document');

render(layout);

pdf.addStructure(structure).end();

pdf.pipe(createWriteStream('dist/test.pdf'));

/*
structure.add(
  doc.struct('Figure', { alt: `${data.brand.name} logo` }, () =>
    doc.image('src/assets/image/logo.png', 24, 24, { width: 144 }).moveDown(2)
  )
);

structure.add(
  doc.struct('H1', () =>
    doc
      .font('Lato-Black')
      .fontSize(24)
      .text(data.candidate.name, { width: 144 })
      .moveDown(1)
  )
);

structure.add(
  doc.struct('H2', () =>
    doc
      .font('Roboto-Regular')
      .fontSize(16)
      .text(data.candidate.headline, { width: 192 })
      .moveDown(1.5)
  )
);

data.levels.forEach(({ active, description, title }) =>
  structure.add(
    doc.struct('Sect', () => {
      const height = [
        doc
          .font('Lato-Black')
          .fontSize(16)
          .heightOfString(title, { width: 216 }),
        doc
          .font('Roboto-Regular')
          .fontSize(11)
          .heightOfString(description, { width: 216 }),
      ].reduce(sum);

      doc.rect(doc.x, doc.y, 216, height).fill(active ? '#4e9f83' : '#f2f2f2');
      doc
        .font('Lato-Black')
        .fontSize(16)
        .fill(active ? '#fff' : '#555')
        .text(title, { width: 216 });
      doc
        .font('Roboto-Regular')
        .fontSize(11)
        .fill(active ? '#aed2c6' : '#a3a3a3')
        .text(description, { width: 216 });
    })
  )
);
*/
