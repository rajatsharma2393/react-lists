// DataGenerator.js
export const data = [
  {
    name: "Cox Hess",
    email: "coxhess@comtrail.com"
  },
  {
    name: "Maxine Meyer",
    email: "maxinemeyer@comtrail.com"
  },
  {
    name: "Carver Lester",
    email: "carverlester@comtrail.com"
  },
  {
    name: "Gilmore Mcconnell",
    email: "gilmoremcconnell@comtrail.com"
  },
  {
    name: "Becky Petersen",
    email: "beckypetersen@comtrail.com"
  },
  {
    name: "Horne Herrera",
    email: "horneherrera@comtrail.com"
  },
  {
    name: "Stout Kent",
    email: "stoutkent@comtrail.com"
  },
  {
    name: "Harmon Gutierrez",
    email: "harmongutierrez@comtrail.com"
  },
  {
    name: "Marion Meadows",
    email: "marionmeadows@comtrail.com"
  },
  {
    name: "Desiree Stark",
    email: "desireestark@comtrail.com"
  },
  {
    name: "Verna Weeks",
    email: "vernaweeks@comtrail.com"
  },
  {
    name: "Bentley Justice",
    email: "bentleyjustice@comtrail.com"
  },
  {
    name: "Marla Powers",
    email: "marlapowers@comtrail.com"
  },
  {
    name: "Yolanda Foley",
    email: "yolandafoley@comtrail.com"
  },
  {
    name: "Pollard Fletcher",
    email: "pollardfletcher@comtrail.com"
  },
  {
    name: "Rebecca Hester",
    email: "rebeccahester@comtrail.com"
  },
  {
    name: "Rhonda Martin",
    email: "rhondamartin@comtrail.com"
  },
  {
    name: "Penny Norman",
    email: "pennynorman@comtrail.com"
  },
  {
    name: "Miranda Brennan",
    email: "mirandabrennan@comtrail.com"
  },
  {
    name: "Dillard Small",
    email: "dillardsmall@comtrail.com"
  },
  {
    name: "Manuela Kelly",
    email: "manuelakelly@comtrail.com"
  },
  {
    name: "Mccray Emerson",
    email: "mccrayemerson@comtrail.com"
  },
  {
    name: "Shepherd Perry",
    email: "shepherdperry@comtrail.com"
  },
  {
    name: "Ellen Wright",
    email: "ellenwright@comtrail.com"
  },
  {
    name: "Marguerite Reid",
    email: "margueritereid@comtrail.com"
  },
  {
    name: "Debra Chaney",
    email: "debrachaney@comtrail.com"
  },
  {
    name: "Cochran West",
    email: "cochranwest@comtrail.com"
  }
];

export default function(page) {
  let startIndex = (page - 1) * 12;
  return data.slice(startIndex, startIndex + 12);
}
