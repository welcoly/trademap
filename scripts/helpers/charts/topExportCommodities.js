/*jslint browser: true*/
/*jslint white: true */
/*jslint vars: true */
/*global $, Modernizr, d3, dc, crossfilter, document, console, alert, define, DEBUG */


/*
 * THIS FILE SETS UP THE topExportCommodities chart
 * */


define(function() {
  'use strict';

  var chart = {

    setup: function () {
      // Initialize chart state:
      $('#topExportCommodities .placeholder').html('');

      // Add filterUpdate listener
      $('#topExportCommodities').on('refreshFilters', chart.refresh);
    },

    refresh: function (event, filters) {

    }

  };

  return chart;
});
