(function(){

    'use strict';

    angular.module('lojas').controller('TelaInicialController', ['$scope', '$http', TelaInicialController]);

    function TelaInicialController($scope, $http){

        $scope.lojas = [];

        $scope.carregaLojas = function(){
            
              $http.get('/api/lojas/').then(function(response){
      
              $scope.lojas = response.data;
      
              }, function(){
              alert("ocorreu um erro com a busca.");
              });
      
        }

        $scope.carregaLojas();

    }

})();