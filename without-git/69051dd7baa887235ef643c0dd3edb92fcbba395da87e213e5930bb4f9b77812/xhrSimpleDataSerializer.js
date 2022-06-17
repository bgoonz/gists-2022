/**
 * @providesModule xhrSimpleDataSerializer
 */

function xhrSimpleDataSerializer(data) {
  let uri = [];
  let key;
  for (key in data) {
    uri.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
  }
  return uri.join('&');
}

module.exports = xhrSimpleDataSerializer;
