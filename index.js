class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(year) {
    return new Date(year, 0, 0).getYear() - this.startDate.getYear();
  };
};


class Route {
  function route_parser(location) {
    return location.split(" ");
  }
  
  constructor(beginningLocation, endingLocation) {

    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }


}
