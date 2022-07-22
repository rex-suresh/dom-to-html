const createAttr = ([attribute, value], element) => element[attribute] = value;
const setAttributes = (attributes, element) => {
  Object.entries(attributes).forEach(attSet => createAttr(attSet, element));
};

const tagOf = (tag, attributes, ...content) => {
  const newContent = content.map(
    subTag => Array.isArray(subTag) ? tagOf(...subTag) : subTag);

  const element = document.createElement(tag);
  setAttributes(attributes, element);
  newContent.forEach(innerContent => element.append(innerContent));

  return element;
};

// const newDom = ['div', {}, ['div', {}, ['div', {}, 'one'], ['div', {}, 'two'], ['div', {}, 'three']]];
