(function(){

    'use strict';

    angular.module('lojas').controller('TelaInicialController', ['$scope', '$http', TelaInicialController]);

    function TelaInicialController($scope, $http){

        $scope.lojas = [];

        $scope.carregaLojas = function(){
            
              $http.get('http://localhost:3000/lojas/').then(function(response){
      
              $scope.lojas = response.data;
      
              }, function(){
              alert("ocorreu um erro com a busca.");
              });
      
        }

        $scope.excluiLoja = function(_id){

            $http.delete('http://localhost:3000/lojas/'+_id).then(function(response){
    
            $scope.lojas = response.data;
            alert("Loja excluída com sucesso...");
            location.reload();
    
            }, function(){
            alert("ocorreu um erro com a busca...");
            });
    
      }

      $scope.carregaModal = function(loja){

        $scope.$broadcast('carregaModal',{loja});
        
      }

        $scope.carregaLojas();

    }

})();