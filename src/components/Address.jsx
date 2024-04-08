import React, { useState, useEffect } from "react";
import "../Styles/address.css";

const Address = ({ onNext }) => {
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [postalAddress, setPostalAddress] = useState("");
  const [city, setCity] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch countries data
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryList = data.map((country) => country.name.common);
        setCountries(countryList);
      })
      .catch((error) => console.error("Error fetching countries:", error));

    // Fetch cities data
    fetch("https://cod.callcourier.com.pk/API/CallCourier/GetCityList")
      .then((response) => response.json())
      .then((data) => {
        const cityList = data.map((city) => city.CityName);
        setCities(cityList);
      })
      .catch((error) => console.error("Error fetching cities:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation and other logic can be added here
    onNext();
  };

  return (
    <div className="address-container">
      <h2 className="address-heading">Please fill your address fields</h2>
      <form className="address-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Select a country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="province">Province:</label>
          <select
            id="province"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            required
          >
            <option value="">Select a province</option>
            <option value="Punjab">Punjab</option>
            <option value="Sindh">Sindh</option>
            <option value="Balochistan">Balochistan</option>
            <option value="KPK">Khyber Pakhtunkhwa (KPK)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          >
            <option value="">Select a city</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="postalAddress">Postal Address:</label>
          <input
            type="text"
            id="postalAddress"
            value={postalAddress}
            onChange={(e) => setPostalAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="streetAddress">Street Address:</label>
          <input
            type="text"
            id="streetAddress"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Address;
