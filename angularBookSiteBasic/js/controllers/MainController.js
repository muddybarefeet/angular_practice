app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Bestsellers'; 
  $scope.promo = 'The most popular books this month.';
  $scope.products = [
  	{ 
    	name: 'Across the Nightingale Floor', 
    	price: 19, 
    	pubdate: new Date('2014', '03', '08'), 
    	cover: 'http://d.gr-assets.com/books/1439521226l/1147723.jpg',
    	likes: 0,
    	dislikes: 0
  	}, 
  	{ 
    	name: 'The Horse and his Boy', 
    	price: 8, 
    	pubdate: new Date('2013', '08', '01'), 
    	cover: 'http://www.agreatreader.com/wp-content/uploads/2016/01/thehorseandhisboy.jpg',
    	likes: 0,
    	dislikes: 0
  	}, 
  	{ 
    	name: 'Harry Potter & The Prisoner of Azkaban', 
    	price: 11.99, 
    	pubdate: new Date('1999', '07', '08'), 
    	cover: 'http://upload.wikimedia.org/wikipedia/en/b/b4/Harry_Potter_and_the_Prisoner_of_Azkaban_(US_cover).jpg',
    	likes: 0,
    	dislikes: 0 
  	}, 
  	{ 
    	name: 'Haroun and the Sea of Stories', 
    	price: 7.99, 
    	pubdate: new Date('2011', '08', '16'), 
    	cover: 'https://spiritofchildrensliterature.files.wordpress.com/2013/01/7285231_orig1.jpg',
    	likes: 0,
    	dislikes: 0 
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
	$scope.minusOne = function(index) { 
  	$scope.products[index].dislikes += 1; 
	};
}]);