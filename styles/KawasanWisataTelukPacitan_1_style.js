var size = 0;
var placement = 'point';

var style_KawasanWisataTelukPacitan_1 = function(feature, resolution){
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
        stroke: new ol.style.Stroke({color: 'rgba(152,0,0,1.0)', lineDash: [14.249999999999998,2.8499999999999996], lineCap: 'butt', lineJoin: 'miter', width: 2.8499999999999996}),fill: new ol.style.Fill({color: 'rgba(152,0,0,0.10196078431372549)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
