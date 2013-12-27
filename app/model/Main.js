Ext.define('clickthrough.model.Main', {
    singleton: true,

    img1: 'resources/images/1.PNG',
    img2: 'resources/images/2.PNG',
    img3: 'resources/images/3.PNG',
    img4: 'resources/images/4.PNG',
    img5: 'resources/images/5.PNG',
    img6: 'resources/images/6.PNG',
    img7: 'resources/images/7.PNG',

    images: function () {
        return [
            {img: this.img1,
                points: [
                    {minX: 16, maxX: 76, minY: 25, maxY: 85, img: this.img2},
                    {minX: 92, maxX: 152, minY: 25, maxY: 85, img: this.img3},
                    {minX: 168, maxX: 228, minY: 25, maxY: 85, img: this.img4},
                    {minX: 244, maxX: 304, minY: 25, maxY: 85, img: this.img5},
                    {minX: 92, maxX: 152, minY: 486, maxY: 546, img: this.img6},
                    {minX: 168, maxX: 228, minY: 486, maxY: 546, img: this.img7}
                ]
            },
            {img: this.img2,
                points: [
                    {minX: 0, maxX: 320, minY: 0, maxY: 568, img: this.img1}
                ]
            },
            {img: this.img3,
                points: [
                    {minX: 0, maxX: 320, minY: 0, maxY: 568, img: this.img1}
                ]
            },
            {img: this.img4,
                points: [
                    {minX: 0, maxX: 320, minY: 0, maxY: 568, img: this.img1}
                ]
            },
            {img: this.img5,
                points: [
                    {minX: 0, maxX: 320, minY: 0, maxY: 568, img: this.img1}
                ]
            },
            {img: this.img6,
                points: [
                    {minX: 0, maxX: 320, minY: 0, maxY: 568, img: this.img1}
                ]
            },
            {img: this.img7,
                points: [
                    {minX: 0, maxX: 320, minY: 0, maxY: 568, img: this.img1}
                ]
            }
        ]
    }
});