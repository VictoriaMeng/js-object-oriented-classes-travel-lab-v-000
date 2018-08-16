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
  constructor(route_parser(beginningLocation), route_parser(endingLocation)) {

    this.beginningLocation = {horizontal: };
    this.endingLocation = endingLocation;
  }


}

function route_parser(location) {
  return location.split(" ");
}
