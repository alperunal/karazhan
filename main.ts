// slugs
import AlliedRaces from "./slugs/allied-races.js";
import Classes from "./slugs/classes.js";
import Races from "./slugs/races.js";
import Slots from "./slugs/slots.js";
import Specs from "./slugs/specs.js";

// gameplay
import classColors from "./constants/class-colors.js";
import itemQualityColors from "./constants/item-quality-colors.js";

export default {
  slugs: {
    classes: Classes,
    races: Races,
    alliedRaces: AlliedRaces,
    slots: Slots,
    specializations: Specs,
  },
  gameplay: {
    classColors: classColors,
    itemColors: itemQualityColors
  },
};
