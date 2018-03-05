(function(){

    'use strict';

    angular.module('lojas').controller('modalController',['$scope','$http', modalController]);

    function modalController($scope, $http){

        $scope.$on('carregaModal', function(event, args){
            
            loja = args.loja;
            
            $scope.carregaLoja(loja);
        });

        $scope.carregaLoja = function(loja){
            
            alert(loja);
            
            $scope.loja = loja;
        }
    }

})();