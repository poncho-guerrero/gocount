// =====================================================================================================
//     ____ _                _
//    / ___| |__   __ _ _ __| |_
//   | |   | '_ \ / _` | '__| __|
//   | |___| | | | (_| | |  | |_
//    \____|_| |_|\__,_|_|   \__|
//
// =====================================================================================================
const Plot = require('../../app/plot');

/**
 * @class
 *
 * This class contains the functions needed to display a single counter's data in a chart.
 * @name Chart
 *
 * @requires NPM:d3
 */
class Chart {
  onMount() {

    var counts = [
      new Date(2019, 5, 7, 4, 20),
      new Date(2019, 5, 7, 5, 20),
      new Date(2019, 5, 7, 6, 20),
      new Date(2019, 6, 7, 4, 20),
      new Date(2019, 6, 7, 5, 20),
      new Date(2019, 6, 7, 6, 20),
      new Date(2019, 7, 7, 4, 20),
      new Date(2019, 7, 7, 5, 20),
      new Date(2019, 7, 7, 6, 20)
    ]

    var plot = new Plot;

    plot.countsByDate(counts);
  }
}

module.exports = Chart;
