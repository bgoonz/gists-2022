/**
 * @providesModule isNode
 * @typechecks
 */

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */
function isNode(object) {
  let doc = object ? (object.ownerDocument || object) : document;
  let defaultView = doc.defaultView || window;
  return !!(object && (
    typeof defaultView.Node === 'function' ? object instanceof defaultView.Node :
      typeof object === 'object' &&
      typeof object.nodeType === 'number' &&
      typeof object.nodeName === 'string'
  ));
}

module.exports = isNode;
