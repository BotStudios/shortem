/*!
 * Shortem
 * (c) 2021 Joe Lee
 * Released under the Apache-2.0 License.
 * https://github.com/BotStudios/shortem
 */
const Database = require('./database.js');
const db = new Database();

exports.repeat = function (str, times) {
  return Array(times + 1).join(str)
}

exports.truncate = function (str, length, chr) {
  chr = chr || '…'
  return str.length >= length ? str.substr(0, length - chr.length) + chr : str
}

function options (defaults, opts) {
  for (var p in opts) {
    if (opts[p] && opts[p].constructor && opts[p].constructor === Object) {
      defaults[p] = defaults[p] || {}
      options(defaults[p], opts[p])
    } else {
      defaults[p] = opts[p]
    }
  }

  return defaults
};

exports.strlen = function (str) {
  var code = /\u001b\[(?:\d*;){0,5}\d*m/g
  var stripped = ('' + (str != null ? str : '')).replace(code, '')
  var split = stripped.split('\n')
  return split.reduce(function (memo, s) { return (s.length > memo) ? s.length : memo }, 0)
}


exports.options = options
exports.db = db

