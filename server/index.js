import express from "express"

import countryCodesRouter from "./routes/CountryCodes.js"
import demonymsRouter from "./routes/Demonyms.js"
import isoCountryCodesRouter from "./routes/ISOCodes.js"
import countriesRouter from "./routes/Countries.js"
import currenciesRouter from "./routes/Currencies.js"
import capitalCitiesRouter from "./routes/CapitalCities.js"
import timezonesRouter from "./routes/Time.js"
import languagesRouter from "./routes/Languages.js"

const router = express.Router();

router.use("/CountryCodes", countryCodesRouter);
router.use("/Demonyms", demonymsRouter);
router.use("/ISOCodes", isoCountryCodesRouter);
router.use("/Countries", countriesRouter);
router.use("/Currencies", currenciesRouter);
router.use("/CapitalCities", capitalCitiesRouter);
router.use("/Time", timezonesRouter);
router.use("/Languages", languagesRouter);

export default router;