import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MainPage() {
  const handleSubmit = async () => {
    try {

      // Example form data
      const formData = {
        endTime: '2024-04-04T12:00:00',
        artistName: 'Example Artist',
        trackName: 'Example Track',
        msPlayed: '1000'
      };

      // Submit form data to backend server using Axios
      const response = await axios.post('/songs', formData);

      // Log response from the server
      console.log('Response from server:', response.data);
    } catch (error) {
      // Log any errors
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="signup-login">
      {/* Button to trigger form submission */}
      <button className="button" onClick={handleSubmit}>Submit Form</button>
      <Link to="/signup" className="button">Sign Up</Link>
      <Link to="/login" className="button">Login</Link>
    </div>
  );
}
