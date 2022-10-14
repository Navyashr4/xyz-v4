//setting interest based on investment type and period
export const GetInterestValue = (invType, period) => {
  let interestVal = 1;
  // if(!period || period === undefined){period = "3"};

  switch (invType) {
    case "Bank Fixed Deposit": {
      switch (period) {
        case "1": {
          interestVal = 5.1;
          break;
        }
        case "3": {
          interestVal = 5.67;
          break;
        }
        case "5": {
          interestVal = 6.65;
          break;
        }
        case "10": {
          interestVal = 8.87;
          break;
        }
        default:
          interestVal = 5.67; //has to match year 1 as default
      }
      break;
    }

    case "Gold": {
      switch (period) {
        case "1": {
          interestVal = 8.48;
          break;
        }
        case "3": {
          interestVal = 9.0;
          break;
        }
        case "5": {
          interestVal = 11.24;
          break;
        }
        case "10": {
          interestVal = 4.78;
          break;
        }
        default:
          interestVal = 9.0;
      }
      break;
    }

    case "Real Estate": {
      switch (period) {
        case "1": {
          interestVal = 2.6;
          break;
        }
        case "3": {
          interestVal = 2.7;
          break;
        }
        case "5": {
          interestVal = 3.8;
          break;
        }
        case "10": {
          interestVal = 6.9;
          break;
        }
        default:
          interestVal = 2.7;
      }
      break;
    }

    case "Public Provident Fund": {
      switch (period) {
        case "1": {
          interestVal = 7.9;
          break;
        }
        case "3": {
          interestVal = 8;
          break;
        }
        case "5": {
          interestVal = 7.8;
          break;
        }
        case "10": {
          interestVal = 8.8;
          break;
        }
        default:
          interestVal = 8;
      }
      break;
    }

    case "ULIP": {
      switch (period) {
        case "1": {
          interestVal = -1.3;
          break;
        }
        case "3": {
          interestVal = 11;
          break;
        }
        case "5": {
          interestVal = 8.6;
          break;
        }
        case "10": {
          interestVal = 10.5;
          break;
        }
        default:
          interestVal = 11;
      }
      break;
    }

    default:
      interestVal = 6;
  }
  return parseFloat(interestVal);
};

export const GetNiftyInterestValue = (period) => {
    let interestVal = 0;
    switch (period) {
        case "1": {
          interestVal = -1.05;
          break;
        }
        case "3": {
          interestVal = 16.48;
          break;
        }
        case "5": {
          interestVal = 13.04;
          break;
        }
        case "10": {
          interestVal = 12.78;
          break;
        }
        default:
          interestVal = 16.48;
      }
    return parseFloat(interestVal);
}

export default GetInterestValue;
