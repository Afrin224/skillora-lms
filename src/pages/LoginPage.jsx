import React, { useState } from 'react';
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react';

export default function LoginPage({ onNavigate }) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle standard email & password form submit with localStorage logic
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setErrorMessage('');
    setLoading(true);

    // Retrieve existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('skillora_users') || '[]');

    if (isSignUp) {
      if (!fullName) {
        setLoading(false);
        setErrorMessage('Please enter your full name.');
        return;
      }

      // Check if user already exists
      const userExists = existingUsers.find(user => user.email === email);
      if (userExists) {
        setLoading(false);
        setErrorMessage('An account with this email already exists. Please log in.');
        return;
      }

      // Create new user object
      const newUser = { fullName, email, password };
      existingUsers.push(newUser);
      localStorage.setItem('skillora_users', JSON.stringify(existingUsers));
      localStorage.setItem('skillora_current_user', JSON.stringify(newUser));
      window.dispatchEvent(new Event('storage'));

      setLoginMessage('Creating your account...');
      setTimeout(() => {
        setLoading(false);
        setLoginMessage('Account created successfully!');
        setSuccess(true);
        setTimeout(() => {
          if (onNavigate) {
            onNavigate('dashboard');
          }
        }, 1200);
      }, 900);

    } else {
      // Log in flow: Check if user exists and password matches
      const validUser = existingUsers.find(user => user.email === email && user.password === password);
      
      if (!validUser) {
        setLoading(false);
        setErrorMessage('Invalid email or password. Please check your credentials or sign up.');
        return;
      }

      localStorage.setItem('skillora_current_user', JSON.stringify(validUser));
      window.dispatchEvent(new Event('storage'));
      setLoginMessage('Logging you in...');
      setTimeout(() => {
        setLoading(false);
        setLoginMessage('Welcome back!');
        setSuccess(true);
        setTimeout(() => {
          if (onNavigate) {
            onNavigate('dashboard');
          }
        }, 1200);
      }, 900);
    }
  };

  return (
    <div className="login-page-root">
      <div className="login-card-container">
        {success ? (
          <div className="login-success-card">
            <div className="login-success-icon-wrap">
              <CheckCircle2 size={54} color="#10B981" />
            </div>
            <h2 className="login-success-title">{loginMessage}</h2>
            <p className="login-success-desc">
              Redirecting you to the Skillora dashboard...
            </p>
          </div>
        ) : (
          <div className="login-card">
            <h1 className="login-card-title">
              {isSignUp ? 'Create an account' : 'Log in to your account'}
            </h1>

            {/* Error Message Alert */}
            {errorMessage && (
              <div className="login-error-banner" style={{ color: '#ef4444', backgroundColor: '#fef2f2', padding: '10px', borderRadius: '6px', fontSize: '14px', marginBottom: '16px', textAlign: 'center' }}>
                {errorMessage}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="login-form">
              {isSignUp && (
                <div className="login-input-group">
                  <label className="login-label">Full Name</label>
                  <input
                    type="text"
                    className="login-input"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              )}

              {/* Email */}
              <div className="login-input-group">
                <label className="login-label">Email</label>
                <input
                  type="email"
                  className="login-input"
                  placeholder="balamia@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="login-input-group">
                <div className="password-label-row">
                  <label className="login-label">Password</label>
                  <button 
                    type="button" 
                    className="btn-forgot-password"
                    onClick={() => alert('Password reset link has been sent to your email.')}
                  >
                    Forgot ?
                  </button>
                </div>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="login-input password-input"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="btn-toggle-eye"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Primary Action Button */}
              <button 
                type="submit" 
                className="btn-login-submit"
                disabled={loading}
              >
                {loading ? 'Processing...' : isSignUp ? 'Create account' : 'Log in'}
              </button>
            </form>

            {/* Bottom Toggle Text */}
            <div className="login-footer-switch">
              {isSignUp ? (
                <p>
                  Already Have An Account ?{' '}
                  <button 
                    type="button" 
                    className="switch-mode-btn"
                    onClick={() => { setIsSignUp(false); setErrorMessage(''); }}
                  >
                    Log In
                  </button>
                </p>
              ) : (
                <p>
                  Don't have an account ?{' '}
                  <button 
                    type="button" 
                    className="switch-mode-btn"
                    onClick={() => { setIsSignUp(true); setErrorMessage(''); }}
                  >
                    Create account
                  </button>
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}