var size = 0;
var placement = 'point';

var style_KompleksWisataBuatanPacitan_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,17,200,0.5294117647058824)', lineDash: [14.249999999999998,2.8499999999999996], lineCap: 'butt', lineJoin: 'miter', width: 2.8499999999999996}),fill: new ol.style.Fill({color: 'rgba(0,8,103,0.09411764705882353)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
