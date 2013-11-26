


function Controller($scope) {


  $scope.isValid = false;
  $scope.isDraft = false;
  $scope.isSaved = false;
  $scope.isPublished = false;
  $scope.isPublishedNow = false;
  $scope.isEmbargoed2 = false;
  $scope.isOverride = false;
  $scope.isEntryList = false;
  $scope.isEntrySelect = false;
  $scope.isFullScreen = false;
  $scope.isSearchResults = false;
  $scope.isEmbargoOptions = false;
  $scope.isAssetAdded = false;
  $scope.isEmbargoed1 = true;
  $scope.isFrontS0 = false;
  $scope.isFrontS1 = false;
  $scope.isFrontS2 = false;
  $scope.isFrontS3 = false;
  $scope.isFa1 = false;
  $scope.isFa2 = false;
  $scope.isFa3 = false;
  $scope.isFa4 = false;
  $scope.isFa5 = false;
  $scope.isSubsite = false;
  $scope.subsitename = "None"
  $scope.fontsizenow = 100;

  $scope.subSite = "";
  $scope.subSiteSelector = [
  	"Learning",
  	"On Your Side",
  	"Health",
  	"Watchdog",
  	"Politics"
  ];

  $scope.master= {};
  
  $scope.favoritesmessageshow = true;
 
  $scope.update = function(story) {
    $scope.master= angular.copy(story);
  };
 
  $scope.reset = function() {
    $scope.story = angular.copy($scope.master);
  };
 
  $scope.isUnchanged = function(story) {
    return angular.equals(story, $scope.master);
  };
 
  $scope.reset();
  
  $scope.searchresults = function()  {
	  $scope.isSearchResults = true;
  }
  
    $scope.addAsset = function()  {
	  $scope.isAssetAdded = true;
  }
 

		  

$scope.publish = function() {
    $scope.isPublishedNow = true;
    if (!$scope.isEmbargoed) { $scope.isPublished = true; }
    if ($scope.isEmbargoed) { $scope.isPublishedEmbargoed = true; }
};

$scope.embargo = function() {
    $scope.isEmbargoed = true;	
};

$scope.cancelembargo = function() {
    $scope.isEmbargoed = false;
};

$scope.unpublish = function() {
    $scope.isPublishedNow = false;
};


$scope.hloverride = function() {
    $scope.isOverride = true;
};

$scope.showentrylist = function() {
    $scope.isEntryList = true;
};

$scope.showentry = function() {
    $scope.isEntrySelect = true;
};

$scope.toggleembargooptions = function() {
    $scope.isEmbargoOptions = !($scope.isEmbargoOptions);
};
		
$scope.toggleshareoptions = function() {
    $scope.isShareOptions = !($scope.isShareOptions);
};

$scope.togglefullscreen = function() {
    $scope.isFullScreen = !($scope.isFullScreen);
};

$scope.toggleFrontS0 = function() {
    $scope.isFrontS0 = !($scope.isFrontS0);
};

$scope.toggleFrontS1 = function() {
    $scope.isFrontS1 = !($scope.isFrontS1);
};

$scope.toggleFrontS2 = function() {
    $scope.isFrontS2 = !($scope.isFrontS2);
};

$scope.toggleFrontS3 = function() {
    $scope.isFrontS3 = !($scope.isFrontS3);
};

$scope.savedraft = function() {
    $scope.isSaved = true;
};

$scope.togglesubsite = function(subsitename) {
    $scope.isSubsite = !($scope.isSubsite);
	$scope.subsitename = subsitename;
    
};

$scope.changefontsize = function(changesize) {
    if ((changesize=='-') && ($scope.fontsizenow>51)) $scope.fontsizenow = $scope.fontsizenow - 10;
    else if (changesize=='0') $scope.fontsizenow = 100;
     else if ((changesize=='+') && ($scope.fontsizenow<499)) $scope.fontsizenow = $scope.fontsizenow + 10;
    changefontsize = $scope.fontsizenow + '%';
    $("#storycopy").css({'font-size': changefontsize });
}

$scope.togglelist = function(newClass) {
    $("#mystorieslist").attr('class', 'storylist');
}

$scope.togglecards = function() {
    $("#mystorieslist").attr('class', 'storycards');
}

  
  $scope.favorites = [];
 
  $scope.addfavoritesearch = function() {
    $scope.favorites.push({text:$scope.favoritetext, done:false});
   /*  $scope.favoritetext = ''; */
    $scope.favoritesmessageshow = true;
  };
  
   $scope.addfavorite = function(favname) {
    $scope.favorites.push({text:favname});
    $scope.favoritesmessageshow = false;
  };
  
  
   $scope.storypanels = [

    { assettype:"story", asseticon:"p-icon-text", headline: "Reports: Andy Kaufman's 'daughter' likely a hoax", byline: "Haley Blum", ssts:"life/people", actiontime:"> 1 minute ago", assetstatus:"in-use" },
				{ assettype:"video", asseticon:"p-icon-video-playlist", headline: "Actress convicted of stalking Alec Baldwin", byline: "AP", ssts: "life/peopple", actiontime:"3 min", assetstatus:"in-use" },
				{ assettype:"story", asseticon:"p-icon-text", headline: "Fiat goes back to future with '1957 Edition' 500", byline: "Chris Woodyard and James R.Healey", ssts: "money", actiontime:"12 minutes ago", assetstatus:"" },
				{ assettype:"story", asseticon:"p-icon-text", headline: "Punchlines: Toronto mayor's questionable answers", byline: "", ssts: "opinion", actiontime:"34 minutes ago", assetstatus:"in-use" },
				{ assettype:"galleries", asseticon:"p-icon-images", headline: "Filipinos without food, water for days see aid arrive", byline: "Calum MacLeod", ssts:"news/world", actiontime:"56 minutes ago", assetstatus:"embargoed" },
				{ assettype:"story", asseticon:"p-icon-text", headline: "First Take: What's ahead in the 'Yellen Years'", byline: "John Waggoner", ssts:"money", actiontime:"Nov 19 2013, 8:22am", assetstatus:"" },
				{ assettype:"galleries", asseticon:"p-icon-images", headline: "Justin Bieber apologizes after kicking Argentine flag", byline: "Haley Blum", ssts:"life/music", actiontime:"Nov 19 2013, 8:01am", assetstatus:"" },
				{ assettype:"video", asseticon:"p-icon-video2", headline: "Mobster 'Whitey' Bulger gets 2 life terms plus 5 years", byline: "Doug Stanglin and G. Jeffrey MacDonald", ssts:"news/nation", actiontime:"Nov 19 2013, 7:42am", assetstatus:"in-use" },
				{ assettype:"story", asseticon:"p-icon-text", headline: "Ed Reed agrees to join New York Jets", byline: "Nate Davis", ssts:"sports/football", actiontime:"Nov 19 2013, 3:22am", assetstatus:"" },
				{ assettype:"story", asseticon:"p-icon-text", headline: "DNA study: Man's best friend may be European in origin", byline: "Malcolm Ritter", ssts:"tech/", actiontime:"Nov 18 2013, 11:42pm", assetstatus:"embargoed" },

    
   ]
  

  $scope.hotwires = [

    { text: "Nation"},
    { text: "Washington"},
    { text: "World"},
    { text: "Advisories"},
    { text: "Elections"},
    { text: "Sports Main"}
    
   ]

  
  $scope.statenames = [

    { text: "Alabama"},
    { text: "Alaska"},
    { text: "Arizona"},
    { text: "Arkansas"},
    { text: "California"},
    { text: "Colorado"},
    { text: "Connecticut"},
    { text: "Delaware"},
    { text: "Florida"},
    { text: "Georgia"},
    { text: "Guam"},
    { text: "Hawaii"},
    { text: "Idaho"},
    { text: "Illinois"},
    { text: "Indiana"},
    { text: "Iowa"},
    { text: "Kansas"},
    { text: "Kentucky"},
    { text: "Louisiana"},
    { text: "Maine"},
    { text: "Maryland"},
    { text: "Massachusetts"},
    { text: "Michigan"},
    { text: "Minnesota"},
    { text: "Mississippi"},
    { text: "Missouri"},
    { text: "Montana"},
    { text: "Nebraska"},
    { text: "Nevada"},
    { text: "New Hampshire"},
    { text: "New Jersey"},
    { text: "New Mexico"},
    { text: "New York"},
    { text: "North Carolina"},
    { text: "North Dakota"},
    { text: "Ohio"},
    { text: "Oklahoma"},
    { text: "Oregon"},
    { text: "Pennsylvania"},
    { text: "Rhode Island"},
    { text: "South Carolina"},
    { text: "South Dakota"},
    { text: "Tennessee"},
    { text: "Texas"},
    { text: "Utah"},
    { text: "Vermont"},
    { text: "Virginia"},
    { text: "Washington"},
    { text: "West Virginia"},
    { text: "Wisconsin"},
    { text: "Wyoming"}
  ]
  
  $scope.misc = [

    { text: "Money & Tech"},
    { text: "Life"},
    { text: "Weather Advisories"},
    { text: "Weather Urgent News"}
    
   ]
 
    $scope.sportsother = [
    { text: "General"},
    { text: "Advisories"},
				{ text: "Boxing"},
    { text: "Olympics"},
    { text: "Horse Racing"},
    { text: "Track & Field"},
    { text: "Auto Racing"},
    { text: "Nascar"},
    { text: "Bowling"},
    { text: "Cycling"},
    { text: "Soccer"},
    { text: "GNS"}
    
   ]
 
  
}

