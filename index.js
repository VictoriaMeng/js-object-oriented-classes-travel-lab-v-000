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
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    const streets = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    const avenues = Math.abs(eastWest.findIndex(`${this.endingLocation.horizontal}`) - eastWest.findIndex(`${this.beginningLocation.horizontal}`));
    return streets + avenues;
  };

}
