'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringArray = sourceString.split(';');

  return stringArray
    .filter((item) => item.trim().length > 0)
    .map((item) => {
      const [key, value] = item.split(':').map((part) => part.trim());

      return { key, value };
    })
    .filter((part) => part.key && part.value !== undefined)
    .reduce((resultObject, { key, value }) => {
      resultObject[key] = value;

      return resultObject;
    }, {});
}

module.exports = convertToObject;
