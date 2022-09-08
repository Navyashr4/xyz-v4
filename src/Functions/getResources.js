const getResources = (invType) => {
  let links = [];
  switch (invType) {
    case "Bank Fixed Deposit": {
      links = [
        {
          text: `Historical Fixed Deposit rates in India`, 
          link: `https://www.rbi.org.in/scripts/PublicationsView.aspx?id=20469`
        },
        {
          text: `History of Fixed deposits through time`,
          link : `https://www.bajajfinservmarkets.in/fixed-deposit/what-is-the-history-of-fixed-deposits-through-time.html`
        },
        {
          text: `Current Fixed deposit rates in India`,
          link: `https://www.bankbazaar.com/fixed-deposit-rate.html`
        },
        {
          text: `Insurance on Fixed deposit by DICGC`,
          link : `https://m.rbi.org.in/scripts/FAQView.aspx?Id=64#:~:text=The%20DICGC%20insures%20principal%20and,DIC
          GC%20would%20be%204%2C99%2C000.`
        }
      ];
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
