queue()
    .defer(d3.csv, "data/bakery.csv")
    .await(makechart);


function makechart(error, bakeryData) {
    
}
    var bakeryData = [
        {"date": "2016-10-30", "time": "09:58:11", "transaction": "1", "item": "Bread"},
        {"date": "2016-10-30", "time": "10:05:34", "transaction": "2", "item": "Scandinavian"},
        {"date": "2016-10-30", "time": "10:05:34", "transaction": "2", "item": "Scandinavian"},
        {"date": "2016-10-30", "time": "10:07:57", "transaction": "3", "item": "Hot chocolate"},
        {"date": "2016-10-30", "time": "10:07:57", "transaction": "3", "item": "Jam"},
        {"date": "2016-10-30", "time": "10:07:57", "transaction": "3", "item": "Cookies"},
        {"date": "2016-10-30", "time": "10:08:41", "transaction": "4", "item": "Muffin"},
        {"date": "2016-10-30", "time": "10:13:03", "transaction": "5", "item": "Coffee"},
        {"date": "2016-10-30", "time": "10:13:03", "transaction": "5", "item": "Pastry"},
        {"date": "2016-10-30", "time": "10:13:03", "transaction": "5", "item": "Bread"},
        {"date": "2016-10-30", "time": "10:16:55", "transaction": "6", "item": "Medialuna"},
        {"date": "2016-10-30", "time": "10:16:55", "transaction": "6", "item": "Pastry"},
        {"date": "2016-10-30", "time": "10:16:55", "transaction": "6", "item": "Muffin"},
        {"date": "2016-10-30", "time": "10:19:12", "transaction": "7", "item": "Medialuna"},
        {"date": "2016-10-30", "time": "10:19:12", "transaction": "7", "item": "Pastry"},
        {"date": "2016-10-30", "time": "10:19:12", "transaction": "7", "item": "Coffee"},
        {"date": "2016-10-30", "time": "10:19:12", "transaction": "7", "item": "Tea"},
        {"date": "2016-10-30", "time": "10:20:51", "transaction": "8", "item": "Pastry"},
        {"date": "2016-10-30", "time": "10:20:51", "transaction": "8", "item": "Bread"},
        {"date": "2016-10-30", "time": "10:21:59", "transaction": "9", "item": "Bread"},
        {"date": "2016-10-30", "time": "10:21:59", "transaction": "9", "item": "Muffin"},
        {"date": "2016-10-30", "time": "10:25:58", "transaction": "10", "item": "Scandinavian"},
        {"date": "2016-10-30", "time": "10:25:58", "transaction": "10", "item": "Medialuna"},
        {"date": "2016-10-30", "time": "10:27:21", "transaction": "11", "item": "Bread"},
        {"date": "2016-10-30", "time": "10:27:21", "transaction": "11", "item": "Medialuna"},
        {"date": "2016-10-30", "time": "10:27:21", "transaction": "11", "item": "Bread"},
        {"date": "2016-10-30", "time": "10:27:21", "transaction": "11", "item": "NONE"},
        {"date": "2016-10-30", "time": "10:30:14", "transaction": "12", "item": "Jam"},
        {"date": "2016-10-30", "time": "10:30:14", "transaction": "12", "item": "Coffee"},
        {"date": "2016-10-30", "time": "10:30:14", "transaction": "12", "item": "Tartine"},
        {"date": "2016-10-30", "time": "10:30:14", "transaction": "12", "item": "Pastry"},
        {"date": "2016-10-30", "time": "10:30:14", "transaction": "12", "item": "Tea"},
        {"date": "2016-10-30", "time": "10:31:24", "transaction": "13", "item": "Basket"},
        {"date": "2016-10-30", "time": "10:31:24", "transaction": "13", "item": "Bread"},
        {"date": "2016-10-30", "time": "10:31:24", "transaction": "13", "item": "Coffee"},
        {"date": "2016-10-30", "time": "10:32:46", "transaction": "14", "item": "Bread"},
        {"date": "2016-10-30", "time": "10:32:46", "transaction": "14", "item": "Medialuna"},
        {"date": "2016-10-30", "time": "10:32:46", "transaction": "14", "item": "Pastry"},
        {"date": "2016-10-30", "time": "10:34:36", "transaction": "15", "item": "NONE"},
        {"date": "2016-10-30", "time": "10:34:36", "transaction": "15", "item": "NONE"},
        {"date": "2016-10-30", "time": "10:34:36", "transaction": "15", "item": "Mineral water"},
        {"date": "2016-10-30", "time": "10:34:36", "transaction": "15", "item": "Scandinavian"},
        {"date": "2016-10-30", "time": "10:37:08", "transaction": "16", "item": "Bread"},
        {"date": "2016-10-30", "time": "10:37:08", "transaction": "16", "item": "Medialuna"},
        {"date": "2016-10-30", "time": "10:37:08", "transaction": "16", "item": "Coffee"},
        {"date": "2016-10-30", "time": "10:38:04", "transaction": "17", "item": "Hot chocolate"},
        {"date": "2016-10-30", "time": "10:41:56", "transaction": "18", "item": "Farm House"},
        {"date": "2016-10-30", "time": "10:43:08", "transaction": "19", "item": "Farm House"},
        {"date": "2016-10-30", "time": "10:43:08", "transaction": "19", "item": "Bread"},
        {"date": "2016-10-30", "time": "10:45:22", "transaction": "20", "item": "Bread"},
        {"date": "2016-10-30", "time": "10:45:22", "transaction": "20", "item": "Medialuna"},
        {"date": "2016-10-30", "time": "10:49:29", "transaction": "21", "item": "Coffee"},
        {"date": "2016-10-30", "time": "10:49:29", "transaction": "21", "item": "Coffee"},
        {"date": "2016-10-30", "time": "10:49:29", "transaction": "21", "item": "Medialuna"},
        {"date": "2016-10-30", "time": "10:49:29", "transaction": "21", "item": "Bread"},
        {"date": "2016-10-30", "time": "10:52:15", "transaction": "22", "item": "Jam"},
        {"date": "2016-10-30", "time": "10:53:49", "transaction": "23", "item": "Muffin"},
        {"date": "2016-10-30", "time": "10:54:33", "transaction": "24", "item": "Bread"},
        {"date": "2016-10-30", "time": "10:55:22", "transaction": "25", "item": "Scandinavian"},
        {"date": "2016-10-30", "time": "10:56:08", "transaction": "26", "item": "Fudge"},
        {"date": "2016-10-30", "time": "11:02:19", "transaction": "27", "item": "Scandinavian"},
        {"date": "2016-10-30", "time": "11:03:24", "transaction": "28", "item": "Coffee"},
        {"date": "2016-10-30", "time": "11:03:24", "transaction": "28", "item": "Bread"},
        {"date": "2016-10-30", "time": "11:05:30", "transaction": "29", "item": "Bread"},
        {"date": "2016-10-30", "time": "11:05:30", "transaction": "29", "item": "Jam"},
        {"date": "2016-10-30", "time": "11:05:30", "transaction": "29", "item": "NONE"},
        {"date": "2016-10-30", "time": "11:07:19", "transaction": "30", "item": "Bread"},
        {"date": "2016-10-30", "time": "11:12:56", "transaction": "31", "item": "Basket"},
        {"date": "2016-10-30", "time": "11:16:15", "transaction": "32", "item": "Scandinavian"},
        {"date": "2016-10-30", "time": "11:16:15", "transaction": "32", "item": "Muffin"},
        {"date": "2016-10-30", "time": "11:22:49", "transaction": "33", "item": "Coffee"},
        {"date": "2016-10-30", "time": "11:25:45", "transaction": "34", "item": "Coffee"},
        {"date": "2016-10-30", "time": "11:25:45", "transaction": "34", "item": "Muffin"},
        {"date": "2016-10-30", "time": "11:27:34", "transaction": "35", "item": "Muffin"},
        {"date": "2016-10-30", "time": "11:27:34", "transaction": "35", "item": "Scandinavian"},
        {"date": "2016-10-30", "time": "11:33:08", "transaction": "36", "item": "Tea"},
        {"date": "2016-10-30", "time": "11:33:08", "transaction": "36", "item": "Bread"},
        {"date": "2016-10-30", "time": "11:37:10", "transaction": "37", "item": "Coffee"},
        {"date": "2016-10-30", "time": "11:37:10", "transaction": "37", "item": "Bread"},
        {"date": "2016-10-30", "time": "11:37:10", "transaction": "37", "item": "NONE"},
        {"date": "2016-10-30", "time": "11:42:40", "transaction": "38", "item": "Bread"},
        {"date": "2016-10-30", "time": "11:42:40", "transaction": "38", "item": "Tea"},
        {"date": "2016-10-30", "time": "11:44:31", "transaction": "39", "item": "Scandinavian"},
        {"date": "2016-10-30", "time": "11:55:51", "transaction": "40", "item": "Juice"},
        {"date": "2016-10-30", "time": "11:55:51", "transaction": "40", "item": "NONE"},
        {"date": "2016-10-30", "time": "11:55:51", "transaction": "40", "item": "Tartine"},
        {"date": "2016-10-30", "time": "11:55:51", "transaction": "40", "item": "Coffee"},
        {"date": "2016-10-30", "time": "11:55:51", "transaction": "40", "item": "Muffin"},
        {"date": "2016-10-30", "time": "11:57:06", "transaction": "41", "item": "Scandinavian"},
        {"date": "2016-10-30", "time": "11:57:45", "transaction": "42", "item": "Bread"},
        {"date": "2016-10-30", "time": "11:57:45", "transaction": "42", "item": "Tea"},
        {"date": "2016-10-30", "time": "12:00:22", "transaction": "43", "item": "Scandinavian"},
        {"date": "2016-10-30", "time": "12:00:22", "transaction": "43", "item": "Fudge"},
        {"date": "2016-10-30", "time": "12:05:47", "transaction": "44", "item": "Coffee"},
        {"date": "2016-10-30", "time": "12:05:47", "transaction": "44", "item": "Medialuna"},
        {"date": "2016-10-30", "time": "12:08:36", "transaction": "45", "item": "Coffee"},
        {"date": "2016-10-30", "time": "12:08:36", "transaction": "45", "item": "Hot chocolate"},
        {"date": "2016-10-30", "time": "12:08:36", "transaction": "45", "item": "Medialuna"},
        {"date": "2016-10-30", "time": "12:09:04", "transaction": "46", "item": "Coffee"},
        {"date": "2016-10-30", "time": "12:15:29", "transaction": "47", "item": "Ella's Kitchen Pouches"},
        {"date": "2016-10-30", "time": "12:15:29", "transaction": "47", "item": "Juice"},
        {"date": "2016-10-30", "time": "12:15:29", "transaction": "47", "item": "Bread"},
        {"date": "2016-10-30", "time": "12:15:29", "transaction": "47", "item": "Muffin"},
        {"date": "2016-10-30", "time": "12:15:29", "transaction": "47", "item": "Jam"},
        {"date": "2016-10-30", "time": "12:17:02", "transaction": "48", "item": "Coffee"},
        {"date": "2016-10-30", "time": "12:23:01", "transaction": "49", "item": "Coffee"},
        {"date": "2016-10-30", "time": "12:23:01", "transaction": "49", "item": "Coffee"},
        {"date": "2016-10-30", "time": "12:23:01", "transaction": "49", "item": "Medialuna"},
        {"date": "2016-10-30", "time": "12:25:11", "transaction": "50", "item": "Bread"},
        {"date": "2016-10-30", "time": "12:25:11", "transaction": "51", "item": "Bread"},
        {"date": "2016-10-30", "time": "12:28:07", "transaction": "52", "item": "Scandinavian"},
        {"date": "2016-10-30", "time": "12:33:08", "transaction": "54", "item": "Bread"},
        {"date": "2016-10-30", "time": "12:38:06", "transaction": "55", "item": "Frittata"},
        {"date": "2016-10-30", "time": "12:38:06", "transaction": "55", "item": "Coffee"},
        {"date": "2016-10-30", "time": "12:38:06", "transaction": "55", "item": "Tea"},
        {"date": "2016-10-30", "time": "12:38:06", "transaction": "55", "item": "Hearty & Seasonal"},
        {"date": "2016-10-30", "time": "12:39:27", "transaction": "56", "item": "Coffee"},
        {"date": "2016-10-30", "time": "12:39:27", "transaction": "56", "item": "Frittata"},
        {"date": "2016-10-30", "time": "12:45:48", "transaction": "57", "item": "Scandinavian"},
        {"date": "2016-10-30", "time": "12:59:29", "transaction": "58", "item": "Victorian Sponge"},
        {"date": "2016-10-30", "time": "12:59:29", "transaction": "58", "item": "Tea"},
        {"date": "2016-10-30", "time": "12:59:29", "transaction": "58", "item": "Soup"},
        {"date": "2016-10-30", "time": "13:02:04", "transaction": "59", "item": "Tea"},
        {"date": "2016-10-30", "time": "13:02:04", "transaction": "59", "item": "NONE"},
        {"date": "2016-10-30", "time": "13:14:04", "transaction": "60", "item": "Cookies"},
        {"date": "2016-10-30", "time": "13:14:04", "transaction": "60", "item": "Coffee"},
        {"date": "2016-10-30", "time": "13:14:04", "transaction": "60", "item": "Juice"},
        {"date": "2016-10-30", "time": "13:14:04", "transaction": "60", "item": "Coffee"},
        {"date": "2016-10-30", "time": "13:15:38", "transaction": "61", "item": "Coffee"},
        {"date": "2016-10-30", "time": "13:24:00", "transaction": "62", "item": "Pick and Mix Bowls"},
        {"date": "2016-10-30", "time": "13:24:00", "transaction": "62", "item": "Hearty & Seasonal"},
        {"date": "2016-10-30", "time": "13:24:00", "transaction": "62", "item": "Hearty & Seasonal"},
        {"date": "2016-10-30", "time": "13:24:00", "transaction": "62", "item": "Coffee"},
        {"date": "2016-10-30", "time": "13:24:00", "transaction": "62", "item": "Smoothies"},
        {"date": "2016-10-30", "time": "13:24:00", "transaction": "62", "item": "Coffee"},
        {"date": "2016-10-30", "time": "13:33:12", "transaction": "63", "item": "Coffee"},
        {"date": "2016-10-30", "time": "13:34:07", "transaction": "64", "item": "Cake"},
        {"date": "2016-10-30", "time": "13:37:25", "transaction": "65", "item": "NONE"},
        {"date": "2016-10-30", "time": "13:37:25", "transaction": "65", "item": "Tartine"},
        {"date": "2016-10-30", "time": "13:37:25", "transaction": "65", "item": "Mighty Protein"},
        {"date": "2016-10-30", "time": "13:37:25", "transaction": "65", "item": "Tea"},
        {"date": "2016-10-30", "time": "13:37:25", "transaction": "65", "item": "Coffee"},
        {"date": "2016-10-30", "time": "13:40:20", "transaction": "66", "item": "Hearty & Seasonal"},
        {"date": "2016-10-30", "time": "13:40:20", "transaction": "66", "item": "Frittata"},
        {"date": "2016-10-30", "time": "13:40:20", "transaction": "66", "item": "Mineral water"},
        {"date": "2016-10-30", "time": "13:46:48", "transaction": "67", "item": "Hearty & Seasonal"},
        {"date": "2016-10-30", "time": "13:46:48", "transaction": "67", "item": "NONE"},
        {"date": "2016-10-30", "time": "13:46:48", "transaction": "67", "item": "Mineral water"},
        {"date": "2016-10-30", "time": "13:46:48", "transaction": "67", "item": "Muffin"},
        {"date": "2016-10-30", "time": "13:49:36", "transaction": "68", "item": "Frittata"},
        {"date": "2016-10-30", "time": "13:49:36", "transaction": "68", "item": "Coffee"},
        {"date": "2016-10-30", "time": "13:49:36", "transaction": "68", "item": "Tea"},
        {"date": "2016-10-30", "time": "13:49:36", "transaction": "68", "item": "Scandinavian"},
        {"date": "2016-10-30", "time": "13:49:36", "transaction": "68", "item": "Chicken sand"},
        {"date": "2016-10-30", "time": "13:51:49", "transaction": "69", "item": "Bread"},
        {"date": "2016-10-30", "time": "13:51:49", "transaction": "69", "item": "Tea"},
        {"date": "2016-10-30", "time": "13:51:49", "transaction": "69", "item": "Victorian Sponge"},
        {"date": "2016-10-30", "time": "13:54:42", "transaction": "70", "item": "Fudge"},
        {"date": "2016-10-30", "time": "13:56:08", "transaction": "71", "item": "Muffin"},
        {"date": "2016-10-30", "time": "14:21:38", "transaction": "72", "item": "Coffee"},
        {"date": "2016-10-30", "time": "14:21:38", "transaction": "72", "item": "Bread"},
        {"date": "2016-10-30", "time": "14:22:39", "transaction": "73", "item": "Bread"},
        {"date": "2016-10-30", "time": "14:24:03", "transaction": "74", "item": "Coffee"},
        {"date": "2016-10-30", "time": "14:24:03", "transaction": "74", "item": "Bread"},
        {"date": "2016-10-30", "time": "14:32:26", "transaction": "75", "item": "NONE"},
        {"date": "2016-10-30", "time": "14:32:26", "transaction": "75", "item": "Jam"},
        {"date": "2016-10-30", "time": "14:32:26", "transaction": "75", "item": "Frittata"},
        {"date": "2016-10-30", "time": "14:32:49", "transaction": "76", "item": "Coffee"},
        {"date": "2016-10-30", "time": "14:35:36", "transaction": "77", "item": "Scandinavian"},
        {"date": "2016-10-30", "time": "14:42:29", "transaction": "78", "item": "Fudge"},
        {"date": "2016-10-30", "time": "14:45:44", "transaction": "79", "item": "Tea"},
        {"date": "2016-10-30", "time": "14:45:44", "transaction": "79", "item": "Coffee"},
        {"date": "2016-10-30", "time": "14:45:44", "transaction": "79", "item": "Muffin"},
        {"date": "2016-10-30", "time": "14:48:40", "transaction": "80", "item": "Frittata"},
        {"date": "2016-10-30", "time": "14:48:40", "transaction": "80", "item": "Bread"},
        {"date": "2016-10-30", "time": "14:48:40", "transaction": "80", "item": "Coffee"},
       ];
    
    var ndx = crossfilter(bakeryData);
    
    show_transaction_data(ndx);
    show_item_data(ndx);
    show_purchase_time_sales(ndx);
    
    dc.renderAll();


function show_transaction_data(ndx) {
    var transaction_dim = ndx.dimension(dc.pluck('transaction'));
    var total_transaction_of_sales = transaction_dim.group().reduceSum(dc.pluck('transaction'));
       
    dc.barchart("#transaction-data")
       .width(300)
       .height(150)
       .margins({top: 10, right: 50, bottom: 30, left: 50})
       .dimension(transaction_dim)
       .group(total_transaction_of_sales)
       .transitionDuration(500)
       .x(d3.scale.ordinal())
       .xUnits(dc.units.ordinal)
       .xAxisLabel("Transactions")
       .yAxis().ticks(20);
}

function show_item_data(ndx) {
    var item_dim = ndx.dimension(dc.pluck('item'));
    var total_item_of_sales = item_dim.group().reduceSum(dc.pluck('item'));
       
    dc.pieChart("#item-data")
       .height(300)
       .radius(90)
       .transitionDuration(1500)
       .dimension(item_dim)
       .group(total_item_of_sales);
}

function show_purchase_time_sales(ndx) {

    var parseTime = d3.time.format("%HH/%mm/%ss").parse;
    bakeryData.forEach(function (d) {
        d.time = parseTime(d.time);
    });
    
    var time_dim = ndx.dimension(dc.pluck('time'));
    var total_time_of_sales = time_dim.group().reduceSum(dc.pluck('time'));
    
    var minTime = time_dim.bottom(1)[0].time;
    var maxTime = time_dim.top(1)[0].time;
    
     dc.linechart("#purchase-time-sales")
        .width(1000)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(time_dim)
        .group(total_time_of_sales)
        .transitionDuration(500)
        .x(d3.time.scale().domain([minTime, maxTime]))
        .xAxisLabel("Time of items purchased")
        .yAxis().ticks(4);
        
}    
        