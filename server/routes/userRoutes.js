const { register, login, getAllUsers } = require('../controllers/userController');

const router = express.Router();

// Rutas de usuario
router.post('/users/register', register);
router.post('/users/login', login);
router.get('/users', getAllUsers);

module.exports = router;
