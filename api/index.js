import express from 'express';

const router = express.Router();
router.get('/', (req, res) => {
    res.send({ data: [] }); // this is an api call so json response is sent

});
export default router;