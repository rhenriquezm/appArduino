(function() {
    var app = angular.module('controllers', []);
    app.controller('indexCtrl', function($scope, $firebaseObject) {
        var ref = firebase.database().ref().child("led");
        $scope.led = $firebaseObject(ref);
        //
        //
        ref.on('value', snap => {
            var led = snap.val();
            if (led.estado == 1) {
                $scope.clase = "md-raised md-primary";
                $scope.accion = "Encender Led";
                $scope.ledImg = "off";
            } else {
                $scope.clase = "md-raised md-warn";
                $scope.accion = "Apagar Led";
                $scope.ledImg = "on";
            }
        });
        //
        //
        $scope.cambiarEstadoLed = function() {
            if ($scope.led.estado == 1) {
                ref.update({
                    estado: 2
                });
            } else {
                ref.update({
                    estado: 1
                });
            }
        }
    })
}());