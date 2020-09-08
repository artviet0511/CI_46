// var canvas = document.getElementById("myCanvas");
// var context = canvas.getContext("2d");
// var x = canvas.width / 2;
// var y = canvas.height / 2;
// var radius = 70;

// context.beginPath();
// context.arc(x, y, radius, 0, 2 * Math.PI, false);
// // context.fillStyle = "#fafafa";
// context.fill();
// context.stroke();
// context.beginPath();
// context.arc(x, y, radius, 0, 2 * Math.PI, false);
// context.fillStyle = "#fafafa";
// context.fill();
// context.lineWidth = 5;
// context.strokeStyle = "blue";
// context.stroke();
// var canvasWidth = 600;
// var canvasHeight = 400;

let myCanvas = document.getElementById("myCanvas");
myCanvas.width = 500;
myCanvas.height = 500;

let ctx = myCanvas.getContext("2d");

function drawLine(ctx, startX, startY, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

// ctx: tham chiếu tới ngữ cảnh vẽ
// startX: tọa độ X của điểm đầu tiên trên trục hoành
// startY: tọa độ Y của điểm đầu tiên trên trục tung
// endX: tọa độ X điểm cuối trên trục hoành
// endY: tọa độ Y điểm cuối trên trục tung

// vẽ một phần của một hình tròn, được gọi là một cung.

function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
}

// ctx: tham chiếu tới ngữ cảnh vẽ
// centerX: toạ độ X của trung tâm đường tròn.
// centerY: toạ độ Y của trung tâm đường tròn
// radius: toạ độ X của điểm cuối trên trục hoành
// startAngle: góc khởi đầu nơi mà một phần của hình tròn bắt đầu
// endAngle: góc kết thúc nơi mà một phần của hình tròn kết thúc

function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}

// ctx: tham chiếu đến ngữ cảnh vẽ
// centerX: toạ độ X của tâm đường tròn
// centerY: toạ độ Y của tâm đường tròn
// radius: toạ độ X của điểm cuối trên trục
// startAngle: góc khởi đầu nơi mà một phần của đường tròn bắt đầu
// endAngle: góc kết thúc nơi mà một phần của hình tròn kết thúc
// color: màu được sử dụng để sơn lát cắt

// drawLine(ctx, 100, 100, 200, 200);
// drawArc(ctx, 150, 150, 150, 0, Math.PI / 3);
// drawPieSlice(ctx, 150, 150, 150, Math.PI / 2, Math.PI, "blue");



// let start = document.getElementById("start");
// start.addEventListener("click", () => {
//     ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
//     ctx.translate(myCanvas.width / 2, myCanvas.height / 2);
//     ctx.rotate(myCanvas.width / 2, myCanvas.height / 2, Math.PI / 6);
//     drawLine(ctx, 0, 0, 200, 200);
//     drawArc(ctx, 0, 0, 150, 0, Math.PI / 3);
//     drawPieSlice(ctx, 0, 0, 150, Math.PI / 2, Math.PI, "blue");
//     ctx.translate(-myCanvas.width / 2, -myCanvas.height / 2);

// })



let Piechart = function (options) {
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.color = options.color;

    this.draw = function () {
        let total_value = 0;
        let color_index = 0;
        for (var categ in this.options.data) {
            var val = this.options.data[categ];
            total_value += val;
        }
        var start_angle = 0;
        for (categ in this.options.data) {
            val = this.options.data[categ];
            var slice_angle = 2 * Math.PI * val / total_value;
            var pieRadius = Math.min(this.canvas.width / 2, this.canvas.height / 2);
            var labelX = this.canvas.width / 2 + (pieRadius / 2) * Math.cos(start_angle + slice_angle / 2);
            var labelY = this.canvas.height / 2 + (pieRadius / 2) * Math.sin(start_angle + slice_angle / 2);
            if (this.options.doughnutHoleSize) {
                var offset = (pieRadius * this.options.doughnutHoleSize) / 2;
                labelX = this.canvas.width / 2 + (offset + pieRadius / 2) * Math.cos(start_angle + slice_angle / 2);
                labelY = this.canvas.height / 2 + (offset + pieRadius / 2) * Math.sin(start_angle + slice_angle / 2);
            }
            drawPieSlice(
                this.ctx,
                this.canvas.width / 2,
                this.canvas.height / 2,
                Math.min(this.canvas.width / 2, this.canvas.height / 2),
                start_angle,
                start_angle + slice_angle,
                this.color[color_index % this.color.length]
            );
            var labelText = (color_index + 1) * 100;
            this.ctx.fillStyle = "white";
            this.ctx.textAlign = "center";
            this.ctx.font = "bold 20px Arial";
            this.ctx.fillText(labelText, labelX, labelY);
            start_angle += slice_angle;
            color_index++;
        }
        if (this.options.doughnutHoleSize) {
            drawPieSlice(
                this.ctx,
                this.canvas.width / 2,
                this.canvas.height / 2,
                this.options.doughnutHoleSize * Math.min(this.canvas.width / 2, this.canvas.height / 2),
                0,
                2 * Math.PI,
                "white"
            );

        }
    }
}

var myVinyls = {
    "Classical music": 1,
    "Alternative rock": 1,
    "Pop": 1,
    "Jazz": 1,
    "200": 1,
    "300": 1,
    "400": 1,
    "500": 1,
    "600": 1,
    "700": 1
};

var myPiechart = new Piechart(
    {
        canvas: myCanvas,
        data: myVinyls,
        color: [
            "#fde23e",
            "#f16e23",
            "#57d9ff",
            "#937e88",
            "red",
            "green",
            "blue",
            "pink",
            "black",
            "aquamarine",
        ],
        doughnutHoleSize: 0.25
    }
);
myPiechart.draw();

let start = document.getElementById("start");
start.addEventListener("click", () => {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.translate(myCanvas.width / 2, myCanvas.height / 2);
    ctx.rotate(myCanvas.width / 2, myCanvas.height / 2, Math.PI / 6);
    
    ctx.translate(-myCanvas.width / 2, -myCanvas.height / 2);

})
