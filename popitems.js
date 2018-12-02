$(document).ready(function(){

    $('#B2').on('click', function() {  // landing.html
      var table1_items = [];
      var i = 0;
      var airtable_read_endpoint = "https://api.airtable.com/v0/app9lhFw2d0zCNuUL/Item?api_key=keyzw1peVZWig6wbC";
      var table1_dataSet = [];
      $.getJSON(airtable_read_endpoint, function(result) {
             $.each(result.records, function(key,value) {
                 table1_items = [];
                     table1_items.push(value.fields.name);
                     table1_items.push(value.fields.colors);
                     table1_items.push(value.fields.price);
                     table1_items.push(value.fields.Price_on_official_website);
                     table1_items.push(value.fields.Price_spread);
                     table1_items.push(value.fields.stores);
                     table1_dataSet.push(table1_items);
                     console.log(table1_items);
              }); // end .each


           $('table#example').DataTable( {
               data: table1_dataSet,
               retrieve: true,
               columns: [
                   { title: "NAME",
                     defaultContent:""},
                   { title: "COLORS",
                       defaultContent:"" },
                   { title: "PRICE",
                     defaultContent:"" },
                   { title: "PRICE(official website)",
                     defaultContent:""},
                   { title: "PRICE SPREAD",
                       defaultContent:""},
                   { title: "STORES",
                     defaultContent:""},
               ]
           } );

      }); // end .getJSON

      var table5_items = [];
      var i = 0;
      var airtable_read_endpoint = "https://api.airtable.com/v0/app9lhFw2d0zCNuUL/Item?api_key=keyzw1peVZWig6wbC";
      var table5_dataSet = [];
      $.getJSON(airtable_read_endpoint, function(result) {
             $.each(result.records, function(key,value) {
                 table5_items = [];
                     table5_items.push(value.fields.name);
                     table5_items.push(value.fields.price);
                     table5_items.push(value.fields.Price_on_official_website);
                     table5_items.push(value.fields.Price_spread);
                     table5_dataSet.push(table5_items);
                     console.log(table5_items);
              }); // end .each

              $('table#example5').DataTable( {
                  data: table5_dataSet,
                  retrieve: true,
                  columns: [
                      { title: "NAME",
                        defaultContent:""},
                      { title: "PRICE",
                        defaultContent:"" },
                      { title: "PRICE(official website)",
                        defaultContent:""},
                      { title: "PRICE SPREAD",
                          defaultContent:""},
                  ]
              } );

              var chart = c3.generate({
              data: {
              columns: table5_dataSet,
              type: 'bar',
              },
              grid: {
              x: {
                label: 'items',
              },
              y: {label: 'price'}
              },
              bar: {
              title: "numbers of items",
              width: {ratio: 0.5}
              }
              });

      }); // end .getJSON


 }); // end button



           $('#B1').on('click', function() {  //stores.html
             var table2_items = [];
             var i = 0;
             var airtable_read_endpoint = "https://api.airtable.com/v0/app9lhFw2d0zCNuUL/Stores?api_key=keyzw1peVZWig6wbC&view=Grid%20view";
             var table2_dataSet = [];
             $.getJSON(airtable_read_endpoint, function(result) {
                    $.each(result.records, function(key,value) {
                        table2_items = [];
                            table2_items.push(value.fields.stores_);
                            table2_items.push(value.fields.items_provided);
                            table2_dataSet.push(table2_items);
                            console.log(table2_items);
                     }); // end .each
                            console.log(table2_dataSet);

                  $('table#example2').DataTable( {
                      data: table2_dataSet,
                      retrieve: true,
                      columns: [
                          { title: "STORES",
                            defaultContent:""},
                          { title: "ITEMS",
                              defaultContent:""},
                      ]
                  } );

                                var chart = c3.generate({
                                size:{
                                  height: 300,
                                  width: 480
                                },
                                data: {
                                columns: table2_dataSet,
                                type : 'pie'
                                },
                                axis: {
                                x: {label: 'stores'},
                                y: {label: 'items'}
                                },
                                });
             }); // end .getJSON
          }); // end button



         $('#B5').on('click', function() {    //stores.html
           var table4_items = [];
           var i = 0;
           var airtable_read_endpoint = "https://api.airtable.com/v0/app9lhFw2d0zCNuUL/Stores?api_key=keyzw1peVZWig6wbC&view=Grid%20view";
           var table4_dataSet = [];
           $.getJSON(airtable_read_endpoint, function(result) {
                  $.each(result.records, function(key,value) {
                      table4_items = [];
                          table4_items.push(value.fields.stores_);
                          table4_items.push(value.fields.average_price_spread);
                          table4_dataSet.push(table4_items);
                          console.log(table4_items);
                   }); // end .each
                          console.log(table4_dataSet);

                $('table#example4').DataTable( {
                    data: table4_dataSet,
                    retrieve: true,
                    columns: [
                        { title: "STORES",
                          defaultContent:""},
                        { title: "AVERAGE PRICE SPREAD",
                            defaultContent:""},
                    ]
                } );

                              var chart2 = c3.generate({
                              size:{
                                height: 300,
                                width: 480
                              },
                              data: {
                              columns: table4_dataSet,
                              type: 'bar'
                              },
                              axis: {
                              x: {label: 'stores'},
                              y: {
                                show: true,
                                label: 'PRICE SPREAD'}
                              },
                              bar: {
                              title: "AVERAGE PRICE SPREAD",

                              }
                              });
           }); // end .getJSON
        }); // end button

              $('#B4').on('click', function() {  //brands.html
               var table3_items = [];
                var i = 0;
                var airtable_read_endpoint = "https://api.airtable.com/v0/app9lhFw2d0zCNuUL/Brands?api_key=keyzw1peVZWig6wbC&view=Grid%20view";
                var table3_dataSet = [];
                $.getJSON(airtable_read_endpoint, function(result) {
                       $.each(result.records, function(key,value) {
                           table3_items = [];
                               table3_items.push(value.fields.brands_);
                               table3_items.push(value.fields.Average_selling_Price);
                               table3_dataSet.push(table3_items);
                               console.log(table3_items);
                        }); // end .each


                     $('table#example3').DataTable( {
                         data: table3_dataSet,
                         retrieve: true,
                         columns: [
                             { title: "BRANDS",
                               defaultContent:""},
                             { title: "AVERAGE SELLING PRICE",
                                 defaultContent:"" },
                         ]
                     } );

                     var chart = c3.generate({
                     size:{
                       height: 300,
                       width: 480
                     },
                     data: {
                     columns: table3_dataSet,
                     type: 'bar'
                     },
                     axis: {
                     x: {label: 'BRANDS'},
                     y: {
                       show: true,
                       label: 'AVERAGE SELLING PRICE'}
                     },
                     bar: {
                     title: "AVERAGE SELLING PRICE",
                     }
                     });
                }); // end .getJSON
              }); // end button

}); // document ready
