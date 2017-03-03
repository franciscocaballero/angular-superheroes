heroes = [{name:'goku', phone:'555-1276'},
          {name:'spiderman', phone:'800-2344'},
           {name:'ironman', phone:'555-4321'},

angular
  .module("heroes", [])
  .controller('heroesCtrl' [ heroesController] )

  function heroesController () {
    this.heroes = heroes
  }
