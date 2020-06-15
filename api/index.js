import express from 'express';
import data from '../src/testData';

const router = express.Router();

router.get('/contests', (req, res) => {
    res.send({ contests: data.contests }); // this is an api call so json response is sent

});
export default router;