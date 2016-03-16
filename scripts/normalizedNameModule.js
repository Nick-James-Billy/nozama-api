'use strict';

// normalizes search parameters and names in database
let normalizedName = function (string) {
  return string.split(' ').join().toLowerCase();
};

module.exports = normalizedName;
