var currencySign = '£';
var appPackage = 50;
var percentageOfSavings = 30; // 30%

$('#ordersPerMonth').on('input', function(){
    updateOrdersPerMonth();
});

function updateOrdersPerMonth(){
    var val = $('#ordersPerMonth').val()
    $('#ordersPerMonthOutput label').html(numberWithCommas(val));
    var min = $('#ordersPerMonth').attr('min');
    var max = $('#ordersPerMonth').attr('max');
    var newVal = Number((val - min) * 100 / (max - min));
    var newPosition = 22.5 - (newVal * 0.45);
    $('#ordersPerMonthOutput').css({left: `calc(${newVal}% + (${newPosition}px))`});
    calculation();
}
updateOrdersPerMonth();


$('#avgOrderValue').on('input', function(){
    updateAvgOrderVal();
});

function updateAvgOrderVal(){
    var val = $('#avgOrderValue').val()
    $('#avgOrderValueOutput label').html(currencySign + numberWithCommas(val));
    var min = $('#avgOrderValue').attr('min');
    var max = $('#avgOrderValue').attr('max');
    var newVal = Number((val - min) * 100 / (max - min));
    var newPosition = 22.5 - (newVal * 0.45);
    $('#avgOrderValueOutput').css({left: `calc(${newVal}% + (${newPosition}px))`});
    calculation();
}
updateAvgOrderVal();

function calculation(){
    var ordersPerMonth = $('#ordersPerMonth').val();
    var avgOrderValue = $('#avgOrderValue').val();
    var x = ordersPerMonth * avgOrderValue;
    var savings = ((x / 100) * percentageOfSavings) - appPackage;
    $('#savings').html(currencySign + numberWithCommas(savings.toFixed()));
}

calculation();

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}