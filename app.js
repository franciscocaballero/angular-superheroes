let heroes = [{name:'goku', phone:'555-1276' affiliation:'dbz'},
          {name:'spiderman', phone:'800-2344' affiliation:'marvel'},
           {name:'ironman', phone:'555-4321' affiliation:'marvel'}
         ]

angular
  .module("heroes", [])
  .controller('heroesCtrl' [ heroesController] )

  function heroesController () {
    this.heroes = heroes
  }
