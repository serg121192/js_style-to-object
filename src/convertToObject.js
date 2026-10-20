'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};
  const stringArray = sourceString.split(';');

  for (const item of stringArray) {
    const [key, value] = item.split(':').map((part) => part.trim());

    if (key && value !== undefined) {
      resultObject[key] = value;
    }
  }

  return resultObject;
}

module.exports = convertToObject;
