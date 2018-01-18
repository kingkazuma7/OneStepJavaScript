// プロトタイプとクラスの比較

// proto
// let Phone = function(name) {
//     this.setName(name);
// };
// Phone.prototype = {
//     setName: function(name) { this.name = name; },
//     getName: function() { return '機種は' + this.name + 'です'; },
// }

// let smartPhone = new Phone('smart phone');
// console.log(smartPhone.getName());


// クラス
class Phone {
    constructor(name) {
        this.name = name;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    getName() {
        console.log('機種は' + this.name + 'です');
    }
}

let smartPhone = new Phone('smart phone');
smartPhone.getName();