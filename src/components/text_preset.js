import { color } from "../theme/color";
import { typography } from "../theme/typography";

const BASE = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: color.white,
};

const BASE_BOLD = {
  fontFamily: typography.primaryBold,
  fontSize: 16,
  color: color.white,
};

const BOLD = {
  fontFamily: typography.bold,
  color: color.white,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 32,
  },
  h2: {
    ...BOLD,
    fontSize: 24,
  },
  h3: {
    ...BOLD,
    fontSize: 18,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 15,
  },
  small: {
    ...BASE,
    fontSize: 13,
  },
};
