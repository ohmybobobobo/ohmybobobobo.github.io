$(document).ready(function(){

    $('#B1').on('click', function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/app9lhFw2d0zCNuUL/Item?api_key=keyzw1peVZWig6wbC";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.name);
                       items.push(value.colors);
                       items.push(value.price);
                       items.push(value.Price_on_official_website);
                       items.push(value.Price_spread);
                       items.push(value.brands);
                       items.push(value.stores);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "name",
                       defaultContent:""},
                     { title: "colors",
                         defaultContent:"" },
                     { title: "price",
                       defaultContent:"" },
                     { title: "Price_on_official_website",
                       defaultContent:""},
                     { title: "Price_spread",
                         defaultContent:""},
                     { title: "brands",
                       defaultContent:""},
                    { tittle: "stores",
                       defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

    $('#B2').on('click', function() {
     var table1_items = [];
      var i = 0;
      var airtable_read_endpoint = "https://api.airtable.com/v0/app9lhFw2d0zCNuUL/Item?api_key=keyzw1peVZWig6wbC";
      var table1_dataSet = [];
      $.getJSON(airtable_read_endpoint, function(result) {
             $.each(result.records, function(key,value) {
                 table1_items = [];
                     table1_items.push(value.name);
                     table1_items.push(value.colors);
                     table1_items.push(value.price);
                     table1_items.push(value.Price_on_official_website);
                     table1_items.push(value.Price_spread);
                     table1_items.push(value.brands);
                     table1_items.push(value.stores);
                     table1_dataSet.push(table1_items);
                     console.log(table1_items);
              }); // end .each
              console.log(table1_dataSet);

           $('#table1').DataTable( {
               data: table1_dataSet,
               retrieve: true,
               columns: [
                   { title: "name",
                     defaultContent:""},
                   { title: "colors",
                       defaultContent:"" },
                   { title: "price",
                     defaultContent:"" },
                   { title: "Price_on_official_website",
                     defaultContent:""},
                   { title: "Price_spread",
                       defaultContent:""},
                   { title: "brands",
                     defaultContent:""},
                   { title: "stores",
                     defaultContent:""},
               ]
           } );
      }); // end .getJSON


}); // document ready
