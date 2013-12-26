Ext.define('clickthrough.view.Main', {
    extend: 'Ext.Img',

    screenWidth: (window.innerWidth > 0) ? window.innerWidth : screen.width,
    screenHeight: (window.innerHeight > 0) ? window.innerHeight : screen.height,
    ratioWidth: (window.innerWidth > 0) ? 320 / window.innerWidth : 320 / screen.width,
    ratioHeight: (window.innerHeight > 0) ? 568 / window.innerHeight : 568 / screen.height,

    pageX: 0,
    pageY: 0,
    images: [],
    points: [],

    config: {
        title: null,
        description: null
    },

    //sets up our tap event listener
    initialize: function () {
        console.log('Initialize clickthrough.view.Main');
//        console.log(this.ratioWidth + ',' + this.ratioHeight);
        this.callParent(arguments);
    },

    //this function is called whenever you tap on the image
    onTap: function (e) {
//        Ext.Msg.alert('coordinates', e.pageX + ',' + e.pageY + '/' + this.screenWidth + ',' + this.screenHeight);
//        console.log(e.pageX + ',' + e.pageY + '/' + this.screenWidth + ',' + this.screenHeight);
        this.pageX = e.pageX * this.ratioWidth;
        this.pageY = e.pageY * this.ratioHeight;

        this.images = clickthrough.model.Main.images();
        for (var h = 0; h < this.images.length; h++) {
//            console.log('check if this is ' + this.images[h].img);
            if (this.getSrc() == this.images[h].img) {
                this.points = this.images[h].points;
                for (var i = 0; i < this.points.length; i++) {
//                    console.log('check if this is point ' + i);
                    if (this.pageX >= this.points[i].minX && this.pageX <= this.points[i].maxX && this.pageY >= this.points[i].minY && this.pageY <= this.points[i].maxY) {
                        this.setSrc(this.points[i].img);
                        break;
                    }
                }
                break;
            }
        }

    }
});