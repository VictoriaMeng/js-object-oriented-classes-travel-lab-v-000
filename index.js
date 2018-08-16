class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(year) {
    return new Date(year, 0, 0).getYear() - this.startDate.getYear();
  };
};

function route_parser(location) {
  return location.split(" ");
}


class Route {
  constructor(beginningLocation, endingLocation) {

    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

}
