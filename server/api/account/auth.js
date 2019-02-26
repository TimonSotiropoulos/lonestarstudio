// *******************************************************
// Account API File - Public
// -------------------------------------------------------

// *******************************************
// Imports
// -------------------------------------------
import express from 'express';
import respack from 'respack';
import * as LOGIC from '../../database/logic';
// --------------------------------

// *******************************************
// Implementations
// -------------------------------------------
const router = express.Router();

router.get('/test', async (req, res, next) => {
    res.json(respack.OKAY({ hello: 'WORLD' }));
});

export default router;
// --------------------------------
