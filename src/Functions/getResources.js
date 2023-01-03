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
      links = [
        {
          text: `Gold Returns`, 
          link: `https://www.valueresearchonline.com/funds/10382/sbi-gold-etf#performance`
        },
        {
          text: `Nifty 50 historic data`,
          link : `https://www1.nseindia.com/products/content/equities/indices/historical_index_data.htm`
        },
        {
          text: `Gold Prices`,
          link : `https://goldprice.org/`
        },
        {
          text: `City-wise gold rates`,
          link : `https://www.moneycontrol.com/news/gold-rates-today/bangalore/`
        },
      ];
      break;
    }

    case "Real Estate": {
      links = [
        {
          text: `Average annual appreciation rate of real estate in India`, 
          link: `https://www.99acres.com/articles/how-much-money-is-needed-to-buy-property-in-india.html`
        },
        {
          text: `Nifty 50 historic data`,
          link : `https://www1.nseindia.com/products/content/equities/indices/historical_index_data.htm`
        },
        {
          text: `House Price Index Historic Data`,
          link: `https://dbie.rbi.org.in/DBIE/dbie.rbi?site=statistics`
        },
        {
          text: `House Price Index`,
          link: `https://www.housingpriceindex.in/`
        },
        {
          text: `House Price Index Historic Data`,
          link: `https://dbie.rbi.org.in/DBIE/dbie.rbi?site=statistics`
        },
        {
          text: `State-wise stamp duty`,
          link : `https://www.bankbazaar.com/tax/stamp-duty.html`
        },
        {
          text: `Real estate lucrative?`,
          link: `https://www.livemint.com/news/india/investing-in-real-estate-is-hardly-a-lucrative-bet-now-116018287218
          14.html`
        }
      ];
      break;
    }

    case "Guaranteed Income Plan": {
      links = ["link1", "link2", "link1"];
      break;
    }

    case "Public Provident Fund": {
      links = [
        {
          text: `Procedures to open & withdraw from PPF account`, 
          link: `https://cleartax.in/s/ppf`
        },
        {
          text: `PPF Interest rate history`,
          link : `https://dailytools.in/PPFCalculator/Article/PPF_KT_PPFInterestRateHistory`
        },
        {
          text: `SBI PPF account opening`,
          link: `https://sbi.co.in/web/personal-banking/investments-deposits/govt-schemes/ppf`
        },
        {
          text: `Loan against PPF`,
          link : `https://www.bankbazaar.com/saving-schemes/loan-against-ppf-account.html`
        }
      ];
      break;
    }

    case "ULIP": {
      links = [
        {
          text: `How does ULIP Work (ICICI Prudential Life Insurance) & benefits`, 
          link: `https://www.iciciprulife.com/ulip-plans/how-ulip-works.html`
        },
        {
          text: `Taxes on ULIP after Finance Budget 2021`,
          link : `https://www.taxmann.com/post/blog/taxation-of-unit-linked-insurance-plans-ulips-the-complete-picture-is-
          out/#:~:text=An%20investment%20made%20by%20an,by%20bonus%20on%20such%20policy.`
        },
        {
          text: `Top myths & facts about ULIP`,
          link: `https://www.myinsuranceclub.com/articles/top-7-myths-and-facts-about-ulip`
        },
        {
          text: `ULIP Calculator`,
          link : `https://www.bajajallianzlife.com/life-insurance-calculator/ulip-calculator.html`
        }
      ];
      break;
    }

    case "Equity": {
      links = [
        {
          text: `How does ULIP Work (ICICI Prudential Life Insurance) & benefits`, 
          link: `https://www.iciciprulife.com/ulip-plans/how-ulip-works.html`
        },
        {
          text: `Taxes on ULIP after Finance Budget 2021`,
          link : `https://www.taxmann.com/post/blog/taxation-of-unit-linked-insurance-plans-ulips-the-complete-picture-is-
          out/#:~:text=An%20investment%20made%20by%20an,by%20bonus%20on%20such%20policy.`
        },
        {
          text: `Top myths & facts about ULIP`,
          link: `https://www.myinsuranceclub.com/articles/top-7-myths-and-facts-about-ulip`
        },
        {
          text: `ULIP Calculator`,
          link : `https://www.bajajallianzlife.com/life-insurance-calculator/ulip-calculator.html`
        }
      ];
      break;
    }

    default: {
      links = [];
    }
  }

  return links;
};

export default getResources;
