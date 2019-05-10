app.controller('listaClientes', function($scope, $http){

    $scope.dados = [];
        
        $http
            .get("js/json/customers.json")
            .success(function(data){
                $scope.dados = data;
            })
            .error(function(){
                alert("Não foi possível carregar os dados");
            });

            $(function(){
                $("#pesquisarCliente").keyup(function(){
                    var texto = $(this).val(); 
                    $(".loading").hide();                 
                    $(".listaClientes tr").hide();
                    $(".listaClientes tr").each(function(){
                        if($(this).text().indexOf(texto) > 0)
                            $(this).show();
                    });
                });

    });
});