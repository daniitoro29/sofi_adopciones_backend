const { Router } = require('express');
const loginRouter = Router();
const { requireAuth, postLogin  } = require('../handlers/loginHandler');

loginRouter.post('/', postLogin);

// Ruta protegida que requiere autenticación
loginRouter.get('/ruta_protegida', requireAuth, (req, res) => {
  res.json({ message: 'Usuario autenticado' });
});

module.exports = loginRouter;