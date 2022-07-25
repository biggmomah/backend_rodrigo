const { Router } = require('express');
const authControler = require('../controllers/auth.controller')
const multer = require('multer')
const upload = multer({ dest: 'public/uploads' })

const router = Router();

router.get('/login', authControler.renderLogin)
router.get('/register', authControler.renderRegister)
router.post('/register', upload.single('file'), authControler.register)
router.post('/login', authControler.login)


module.exports = router