const getResources = (invType) => {
  let links = [];
  switch (invType) {
    case "Bank Fixed Deposit": {
      links = ["link1", "link2", "link1"];
      break;
    }

    case "Gold": {
      links = ["link1", "link2", "link1"];
      break;
    }

    case "Real Estate": {
      links = ["link1", "link2", "link1"];
      break;
    }

    case "Guaranteed Income Plan": {
      links = ["link1", "link2", "link1"];
      break;
    }

    default: {
      links = [];
    }
  }

  return links;
};

export default getResources;
