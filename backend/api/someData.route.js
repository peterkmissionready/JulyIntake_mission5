<<<<<<< HEAD
import express from 'express'
import MyDataCtrl from './myData.controller.js';

const router = express.Router();

router.route('/').get(MyDataCtrl.apiGetMyData);

=======
import express from 'express'
import MyDataCtrl from './myData.controller.js';

const router = express.Router();

router.route('/').get(MyDataCtrl.apiGetMyData);

>>>>>>> 7559f16 (Test pushing works on my end.)
export default router;