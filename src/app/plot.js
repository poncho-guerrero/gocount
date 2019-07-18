// =====================================================================================================
//    ____  _       _
//   |  _ \| | ___ | |_
//   | |_) | |/ _ \| __|
//   |  __/| | (_) | |_
//   |_|   |_|\___/ \__|
//
// =====================================================================================================

const d3 = require('d3');

/**
 * @class
 *
 * This class manages the development interface that will display charts and other graphical assets. The use of d3 is not restricted to only this class, but as a general rule d3 usage will should be assumed to be inside this class unless the situation requires an exception.
 * @name Plot
 */
class Plot {
  /**
   * Plots a scatterplot with date values as a horizontal axis and time values as a vertical axis.
   * 
   * @param {Array} dates List of counts represented by an array of timestamps.
   */
  countsByDate(dates) {
    var svg = d3
      .select('svg')
      .attr('width', '100%')
      .attr('height', '300px');

    // /*
    // Temporary Background
    svg
      .append('rect')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('fill', 'lightgrey');
    // */

    var vertical_axis = d3
      // Defines scales of the axis.
      .axisLeft(
        d3
          .scaleLinear()
          .domain([0, 1440])
          .range([250, 0])
      )
      // Defines the values that will be displayed.
      .tickValues([0, 360, 720, 1080, 1440])
      // Defines the format that the tick values will use.
      .tickFormat(function(minutes) {
        let hours_time = Math.floor(minutes / 60).toString();
        let minutes_time =
          minutes % 60 === 0 ? '00' : (minutes % 60).toString();
        return hours_time + ':' + minutes_time;
      });

    var horizontal_axis = d3
      .axisBottom(
        d3
          .scaleOrdinal()
          .domain([0, 11])
          .range([350, 60])
      )
      .tickValues([1, 2, 3, 4, 5]);

    svg
      .append('g')
      .attr('transform', 'translate(50, 10)')
      .call(vertical_axis);

    svg
      .append('g')
      .attr('transform', 'translate(0, 270)')
      .call(horizontal_axis);
  }
}

module.exports = Plot;
