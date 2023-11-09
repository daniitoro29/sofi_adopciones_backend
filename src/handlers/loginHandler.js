const jwt = require('jsonwebtoken');
const secretKey = 'mi_clave_secreta'; // Debes usar la misma clave que se utilizó para firmar el token

const requireAuth = (req, res, next) => {
  // Obtén el token de la solicitud (normalmente en el encabezado "Authorization")
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  try {
    // Verifica el token
    const decoded = jwt.verify(token, secretKey);
    req.userId = decoded.userId; // Puedes almacenar el ID del usuario en la solicitud si es necesario
    next(); // Continúa con la siguiente función de middleware
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
};

const authenticateUser = (username, password, users) => {
    const user = users.find((u) => u.Usu_Correo === username);
    if (user && user.Usu_Contraseña === password) {
      return user;
    }
    return null;
  };

  const postLogin = async (req, res) => {
    const { username, password, users } = req.body; // Obtén el username y password del cuerpo de la solicitud
  console.log('Esto estoy recibiendo en users ****', users )
    // Realiza la autenticación del usuario
    const user = authenticateUser(username, password, users);
    if (user) {
      const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1m' });
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  };

module.exports = {requireAuth, postLogin};