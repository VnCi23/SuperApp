import React, { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    birthday: '',
    birthTime: '',
    placeOfBirth: '',
    email: '',
    password: '',
    confirmPassword: '',
    picture: null,
    idPicture1: null,
    idPicture2: null,
    idPicture3: null,
    address: '',
    phoneNumber: '',
    bio: '',
    jobTitle: '',
    company: '',
    education: '',
    skills: '',
    otherInfo: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login:', { email: formData.email, password: formData.password });
    } else {
      console.log('Sign Up:', formData);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-blue-500 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              {['name', 'surname', 'birthday', 'birthTime', 'placeOfBirth', 'address', 'phoneNumber', 'jobTitle', 'company', 'education', 'skills'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-white">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  <input
                    type={field === 'birthday' ? 'date' : field === 'birthTime' ? 'time' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                </div>
              ))}
              {['picture', 'idPicture1', 'idPicture2', 'idPicture3'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-white">{field.replace(/([A-Z])/g, ' $1').trim()}</label>
                  <input
                    type="file"
                    id={field}
                    name={field}
                    onChange={handleChange}
                    className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-white">Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="otherInfo" className="block text-sm font-medium text-white">Other Info</label>
                <textarea
                  id="otherInfo"
                  name="otherInfo"
                  value={formData.otherInfo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
            </>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <div className="text-center">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="mt-4 text-white hover:underline"
          >
            {isLogin ? 'Create an account' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
