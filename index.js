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
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  blocksTravelled(){
    const streets = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    const avenues = 4;
    return streets + avenues;
  };

}
