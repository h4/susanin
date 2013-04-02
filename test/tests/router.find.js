var Susanin = require('../../');

module.exports = {

    setUp : function(callback) {
        var susanin = this.susanin = Susanin();

        susanin
            .addRoute({
                name : 'first',
                pattern : '/first'
            });

        susanin
            .addRoute({
                name : 'second',
                pattern : '/firsttt'
            });

        susanin.addRoute({
            name : 'third',
            pattern : '/first',
            data : {
                method : 'post'
            }
        });

        susanin.addRoute({
            name : 'fourth',
            pattern : '/fourth'
        });

        callback();
    },

    '"find" method must return array' : function(test) {
        var finded = this.susanin.find('/first');

        test.strictEqual(finded[0], this.susanin.getRouteByName('first'));
        test.deepEqual(finded[1], {});
        test.strictEqual(this.susanin.find('/first', { method : 'post' })[0], this.susanin.getRouteByName('third'));
        test.strictEqual(this.susanin.find('/f'), null);

        test.done();
    }

};