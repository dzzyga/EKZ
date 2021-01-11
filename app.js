(function () {
    'use strict';

    var factory2 = new Service111();

    angular.module('Ekazamen', [])
        .controller('Controller', Controller)
        .factory('Factory', Factory);

    Controller.$inject = ['Factory'];

    function Controller(Factory) {
        var list1 = this;

        var Jogurts = Factory();

        list1.item = Jogurts.getAll();

        list1.delete = function (index) {
            Jogurts.delete(index);
        };
        list1.hide = function(index){
            Jogurts.hide(index);
        }
    }

    function Service111() {
        var service = this;

        var items = [
        {
                mark: "ящиків Чудо",
                quantity: 6,
                show : true
            },
            {
                mark: "ящиків Дольче",
                quantity: 3,
                 show : true
            },
            {
                mark: "ящиків Наш край",
                quantity: 11,
                 show : true
            },
            {
                mark: "ящиків Тульчинка",
                quantity: 2,
                 show : true
            },
            {
                mark: "ящиків Ферма",
                quantity: 4,
                 show : true
            },
            {
                mark: "ящиків Свій смак",
                quantity: 9,
                 show : true
            },
        ];

        service.delete = function (itemIndex) {
            items.splice(itemIndex, 1);
        };

        service.getAll = function () {
            return items;
        };
            service.hide = function(index)
        {
             items[index].show = false;
        }
    }

    function Factory() {
        var factory = function () {
            return factory2;
        };
        return factory;
    }
})();
