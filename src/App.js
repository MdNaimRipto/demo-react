import './App.css';

// https://localhost:9999/v1.0.0/registration/admin/register

function App() {
  const requestData = () => {
    fetch(`https://35.223.101.95:8443/v1.0.0/registration/admin/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        "ResourceType": "Admin",
        "firstname": "kk",
        "lastname": "main",
        "address": "Demra1, Dhaka",
        "city": "Dhaka1",
        "contactnumber": "+918447925466",
        "email": "aalkui@gmail.com",
        "pincode": "242554",
        "notification": {
          "email": true,
          "sms": true
        },
        "objectType": "Admin",
        "appoitmentId": "0",
        "password": "12345",
        "role": [
          "USER",
          "ADMIN"
        ]
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  return (
    <div>
      <button onClick={requestData}>
        Request
      </button>
    </div>
  );
}

export default App;
