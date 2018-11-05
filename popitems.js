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

 $('#B1').on('click', function() {
  var table2_items = [];
   var i = 0;
   var airtable_read_endpoint = "https://api.airtable.com/v0/app9lhFw2d0zCNuUL/Stores?api_key=keyzw1peVZWig6wbC&view=Grid%20view";
   var table2_dataSet = [];
   $.getJSON(airtable_read_endpoint, function(result) {
          $.each(result.records, function(key,value) {
              table2_items = [];
                  table2_items.push(value.fields.stores_);
                  table2_items.push(value.fields.location);
                  table2_items.push(value.fields.telephone);
                  table2_items.push(value.fields.business_hours);
                  table2_items.push(value.fields.items_provided);
                  table2_dataSet.push(table2_items);
                  console.log(table2_items);
           }); // end .each


        $('table#example2').DataTable( {
            data: table2_dataSet,
            retrieve: true,
            columns: [
                { title: "stores_",
                  defaultContent:""},
                { title: "location",
                    defaultContent:"" },
                { title: "telephone",
                  defaultContent:"" },
                { title: "business_hours",
                  defaultContent:""},
                { title: "items_provided",
                    defaultContent:""},
            ]
        } );
   }); // end .getJSON
}); // end button

}); // document ready
