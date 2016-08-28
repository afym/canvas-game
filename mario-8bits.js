Canvas = function (id, bits, scale) {
    this.id = id;
    this.bits = bits;
    this.scale = scale;

    this.getContext = function () 
    {
        var canvas = document.getElementById(this.id);
        var context = canvas.getContext("2d");
        var size = this.bits * this.scale;
        context.canvas.width = size;
        context.canvas.height = size;
       
        return context;
    }

    this.getBits = function()
    {
        return this.bits;
    }

    this.getScale = function()
    {
        return this.scale;
    }
};

Matrix = function (canvas) {
    this.canvas = canvas;
    this.context = null;
    this.size = 0;

    this.draw = function() 
    {
        this.context = this.canvas.getContext();
        getSize.call(this);
        buildMatrix.call(this);
        this.context.stroke();
    }

    var getSize = function()
    {
        this.size = this.canvas.getScale();
    }

    var buildMatrix = function() 
    {
        for (var row = 0; row < this.canvas.getBits(); row++) {
            for (column = 0; column < this.canvas.getBits(); column++) {
                this.context.rect(column * this.size, row * this.size, this.size, this.size);
            }
        }
    }
};

var canvas = new Canvas("mario", 16, 10);
var matrix = new Matrix(canvas);
matrix.draw();