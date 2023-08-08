const express =require('express');
const {AddAdmin,FindAllAdmin,FindOneAdmin,UpdateAdmin,DeleteAdmin} = require ('../controllers/admin.controller');
const router = express.Router()

/* add admin   */

router.post('/admin' , AddAdmin)

/* find all admin  */

router.get('/admin' , FindAllAdmin)

/* find admin by id  */

router.get('/admin/:id' ,FindOneAdmin)

/* update admin by id  */

router.put('/admin/:id',UpdateAdmin)

/* delete admin by id  */

router.delete('/admin/:id', DeleteAdmin)

module.exports = router;
