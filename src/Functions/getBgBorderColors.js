const borderColor = (score) => {
  let colors = {
    bg: "",
    border: "",
    text : ""
  };
  switch (score) {
    case 0: {
      colors.bg = "bg-red-100";
      colors.border = "border-red-600";
      colors.text = "text-red-600"
      break;
    }
    case 1: {
      colors.bg = "bg-red-100";
      colors.border = "border-red-600";
      colors.text = "text-red-600"
      break;
    }
    case 2: {
      colors.bg = "bg-red-100";
      colors.border = "border-red-600";
      colors.text = "text-red-600"
      break;
    }
    case 3: {
      colors.bg = "bg-amber-100";
      colors.border = "border-amber-400";
      colors.text = "text-amber-400"
      break;
    }
    case 4: {
      colors.bg = "bg-amber-100";
      colors.border = "border-amber-400";
      colors.text = "text-amber-400"
      break;
    }
    case 5: {
      colors.bg = "bg-blue-100";
      colors.border = "border-blue-600";
      colors.text = "text-blue-600"
      break;
    }
    case 6: {
      colors.bg = "bg-blue-100";
      colors.border = "border-blue-600";
      colors.text = "text-blue-600"
      break;
    }
    case 7: {
      colors.bg = "bg-blue-100";
      colors.border = "border-blue-600";
      colors.text = "text-blue-600"
      break;
    }
    case 8: {
      colors.bg = "bg-green-100";
      colors.border = "border-green-600";
      colors.text = "text-green-600"
      break;
    }
    case 9: {
      colors.bg = "bg-green-100";
      colors.border = "border-green-600";
      colors.text = "text-green-600"
      break;
    }
    case 10: {
      colors.bg = "bg-green-100";
      colors.border = "border-green-600";
      colors.text = "text-green-600"
      break;
    }

    default:
      colors.bg = "bg-green-100";
      colors.border = "border-green-600";
      colors.text = "text-green-600"
  }

  return colors;
};

export default borderColor;
