<?php
	$baseUrl = 'http://';
	$origin = str_replace('index.php', '', $_SERVER['PHP_SELF']);
	$baseUrl = $baseUrl.$_SERVER['SERVER_NAME'].$origin;
?>

<!DOCTYPE html>
<html lang="en" ng-app="app">

	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<title>Les Bohémiens</title>
		
		<base href="<?php echo $baseUrl ?>" />
				
		<meta name="author" content="Giuseppe Angri, Francesco Luigi La Marca">
    <link type="text/plain" rel="author" href="<?php echo $baseUrl ?>humans.txt" />
				
		<!-- Bootstrap CSS -->
		<link href="bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
		
		<!-- Custom CSS -->
		<link href="css/custom.css" rel="stylesheet">
				
		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
		
		<script type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBdThfPJCWB0XXENvzwHNI5YSGicMboub8">
    </script>
				
	</head>

	<body ng-controller="MainController as MainCtrl">
				
		<div class="topbar" ng-class="{ 'topbar-animation' : firstOpen, 'submenu-animation' : show_submenu }">

			<object id="logo" class="logo" ng-class="{ 'vertical-align' : MainCtrl.isMobile() }" type="image/svg+xml" data="media/lesbohemiensNero.svg"></object>
			
			<div class="menu-div text-center noselect hidden-xs hidden-sm" ng-if="!MainCtrl.isMobile()">
				<ul class="menu">
					<li ng-repeat="entry in menu">
					
						<span ng-if="entry.submenu" ng-click="MainCtrl.showSubMenu(entry.submenu)">{{ entry.name }}</span>
						<a href="{{entry.url}}" ng-if="!entry.submenu">{{ entry.name }}</a>

					</li>
				</ul>
			</div>
			
			<div ng-if="MainCtrl.isMobile()" ng-click="MainCtrl.showMenu()" style="width: 100%;
    position: absolute;
    height: 44px;
    top: 0;">
			<span class="show-menu glyphicon glyphicon-menu-hamburger pull-left visible-xs visible-sm" ></span>
			</div>
			
		</div>
		
		<div class="topbar submenu" ng-if="show_submenu">
			
			<div class="menu-div vertical-align text-center hidden-xs hidden-sm" ng-class="{ 'submenu-change' : !submenu_change }">
				<ul class="menu">
					<li ng-repeat="entry in submenu">
						<a href="{{entry.url}}" ng-click="MainCtrl.clickMenu(entry.url)">{{ entry.name }}</a>
					</li>
				</ul>
			</div>
			
		</div>
		
		<div class="animate-menu menu-mobile visible-xs visible-sm text-center" ng-if="menu_mobile" style="width: 100%;">
			<ul style="width: 100%;">
				<div ng-repeat="entry in menu" >
					
					<div style="width: 100%; position: relative;">
						<li style="width: 100%;">
							<span ng-if="entry.submenu" ng-click="MainCtrl.showSubMenuMobile(entry)" style="width: 100%; display: block;">{{ entry.name }}</span>
							<a href="{{entry.url}}" ng-if="!entry.submenu" ng-click="MainCtrl.clickMenu(entry.url)" style="width: 100%; display: block;">{{ entry.name }}</a>					
							<span ng-if="entry.submenu && !show_submenu_mobile[entry.name]" class="glyphicon glyphicon-menu-down pull-right" style="font-size: large; right: 5%;     position: absolute;
	    top: 50%;
	    transform: translateY(-50%);" ng-click="MainCtrl.showSubMenuMobile(entry)"></span>
	    				<span ng-if="entry.submenu && show_submenu_mobile[entry.name]" class="glyphicon glyphicon-menu-up pull-right" style="font-size: large; right: 5%;     position: absolute;
	    top: 50%;
	    transform: translateY(-50%);" ng-click="MainCtrl.showSubMenuMobile(entry)"></span>
						</li>
					</div>
					
					<div class="submenu" ng-if="show_submenu_mobile[entry.name]" style="width: 100%;">
						<li ng-repeat="subentry in entry.submenu" style="width: 100%;">
							<a href="{{subentry.url}}" ng-click="MainCtrl.clickMenu(subentry.url)" style="width: 100%; display: block;">{{ subentry.name }}</a>
						</li>
					</div>
					
				</div>
			</ul>
		</div>
		
		<loading />
										
		<div ng-if='!menu_mobile' class="main" ng-view autoscroll="true"></div>
				
		<div ng-if='!isRouteLoading && !menu_mobile' class="footer container-full-w">
			<p class="left-foot">COPYRIGHT © Les Bohémiens  All rights reserved</p>
			<p class="right-foot">
				<a href="home">Home</a>
				<span style="font-size: smaller;"> • </span> 
				<a href="man/ss16">Man</a> 
				<span style="font-size: smaller;"> • </span> 
				<a href="woman/ss16">Woman</a> 
				<span style="font-size: smaller;"> • </span> 
				<a href="storelocator">Store Locator</a> 
				<span style="font-size: smaller;"> • </span> 
				<a href="mailto:info@lesbohemiens.it">Contact Us</a></p>
		</div>
						
		<script src="bower_components/angular/angular.min.js"></script>
		<script src="bower_components/angular-resource/angular-resource.min.js"></script>
		<script src="bower_components/angular-route/angular-route.min.js"></script>
		<script src="bower_components/angular-animate/angular-animate.min.js"></script>
		<script src="bower_components/angular-i18n/angular-locale_it-it.js"></script>
		<script src="bower_components/angular-media-queries/match-media.js"></script>
		<script src="bower_components/angular-bootstrap/ui-bootstrap.min.js"></script>
		
		<script src="js/app.module.js"></script>
		
		<script src="js/core/core.module.js"></script>
		<script src="js/core/core.config.js"></script>
		
		<script src="js/directives/fullscreen.directive.js"></script>
		<script src="js/directives/loading.directive.js"></script>
		<script src="js/directives/onviewport.directive.js"></script>
		
		<script src="js/main/main.module.js"></script>
		<script src="js/main/main.controller.js"></script>
		
		<script src="js/home/home.module.js"></script>
		<script src="js/home/home.controller.js"></script>
		
		<script src="js/man/man.module.js"></script>
		<script src="js/man/man.controller.js"></script>

		<script src="js/woman/woman.module.js"></script>
		<script src="js/woman/woman.controller.js"></script>
		
		<script src="js/store_italia/store_italia.module.js"></script>
		<script src="js/store_italia/store_italia.factory.js"></script>
		
		<script src="js/storelocator/storelocator.module.js"></script>
		<script src="js/storelocator/storelocator.controller.js"></script>
				
	</body>

</html>