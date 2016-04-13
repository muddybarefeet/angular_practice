app.controller('MainController', ['$scope', function($scope) {
  $scope.move = {
    icon: 'img/move.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };

  $scope.shutterbugg = {
    icon: 'img/shutterbugg.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  };

  $scope.gameboard = {
    icon: 'img/gameboard.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  };

  $scope.forecast = {
    icon: 'img/forecast.jpg',
    title: 'Forecast',
    developer: 'Forecast',
    price: 1.99
  };
  $scope.apps = [
  { 
    icon: 'http://nl.thebikemessenger.com/media/wysiwyg/newsletter/Brera-retro-bicycle-singles.jpg', 
    title: 'Mappify', 
    developer: 'Huggada', 
    price: 0.99 
  }, 
  { 
    icon: 'http://bearfoottheory.com/wp-content/uploads/2014/08/Hipcamp-feature-image.jpg', 
    title: 'Hip Camp', 
    developer: 'Outdoors Lover', 
    price: 2.99 
  },
  { 
    icon: 'http://www.hereinuk.com/wp-content/uploads/2015/12/unit9_Chihuly_950x530_3.jpg', 
    title: 'The Chihuly App', 
    developer: 'Arty One', 
    price: 200 
  },
  {
  	icon: 'https://s-media-cache-ak0.pinimg.com/236x/49/3a/05/493a0579dcdd2b3f8f5f2b584cdc1e35.jpg',
    title: 'Throw a Pot',
    developer: 'Potter',
    price: 150
  }
];
}]);