const pledges = [
  {
    id: "no_reward",
    type: "NoPledge",
    requiresFunding: false,
    title: "Pledge with no reward",
    description:
      "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
  },
  {
    id: "bamboo_stand",
    type: "BambooStand",
    title: "Bamboo Stand",
    requiresFunding: true,
    subtitle: "Pledge $25 or more",
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to aspecial Backer member list.",
    remainingPledge: 101,
  },
  {
    id: "black_edition_stand",
    type: "BlackEditionStand",
    title: "Black Edition Stand",
    requiresFunding: true,
    subtitle: "Pledge $25 or more",
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    remainingPledge: 64,
  },
  {
    id: "mahogany_special_edition",
    type: "Mahogany",
    title: "Mahogany Special Edition",
    subtitle: "Pledge $200 or more",
    requiresFunding: true,
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    remainingPledge: "0",
  },
];

export default pledges;
