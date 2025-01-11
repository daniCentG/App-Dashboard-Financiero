import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Función para validar el formulario
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Por favor, introduce un correo electrónico válido';
    }
    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 5) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    return newErrors;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // EJEMPLO: Simular inicio de sesión
        await new Promise((resolve) => setTimeout(resolve, 1500));
        if (formData.email === 'usuario@ejemplo.com' && formData.password === '12345') {
          console.log('Inicio de sesión exitoso', formData);
          setIsLoggedIn(true);
        } else {
          setErrors({ submit: 'Correo o contraseña incorrectos' });
        }
      } catch (error) {
        setErrors({ submit: 'Error en el inicio de sesión. Por favor, inténtalo de nuevo.' });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-900 to-blue-400">
      {/* Cartel con el correo y la contraseña de ejemplo */}
      <div className="absolute top-4 p-3 rounded-md bg-blue-50 border border-blue-200 shadow-md">
        <p className="text-sm text-red-700 text-center">PARA EL ACCESO A LA DEMO: </p>
        <p className="text-sm text-green-800 text-center">Correo: usuario@ejemplo.com</p>
        <p className="text-sm text-green-800 text-center">Contraseña: 12345</p>
      </div>
      {/* Formulario de inicio de sesión */}
      <form className="bg-white p-8 rounded-lg shadow-lg w-96 h-auto border border-gray-300 hover:shadow-2xl transition-shadow duration-300 mt-20" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Iniciar Sesión</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <div className="flex items-center border rounded p-2">
            <FaEnvelope className="text-blue-500 mr-2" />
            <input
              type="email"
              name="email"
              className="w-full p-2 outline-none text-gray-700"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Contraseña</label>
          <div className="flex items-center border rounded p-2">
            <FaLock className="text-blue-500 mr-2" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              className="w-full p-2 outline-none text-gray-700"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="ml-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.password}
            </p>
          )}
        </div>
        {errors.submit && (
          <div className="p-3 rounded-md bg-red-50 border border-red-200" role="alert">
            <p className="text-sm text-red-600">{errors.submit}</p>
          </div>
        )}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300" disabled={isSubmitting}>
          {isSubmitting ? 'Ingresando...' : 'Ingresar'}
        </button>

      </form>
    </div>
  );
};

export default Login;