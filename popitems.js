$(document).ready(function(){

    $('#B2').on('click', function() {
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
                     table1_items.push(value.fields.brands);
                     table1_items.push(value.fields.stores);
                     table1_dataSet.push(table1_items);
                     console.log(table1_items);
              }); // end .each


           $('table#example').DataTable( {
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
 }); // end button

}); // document ready
