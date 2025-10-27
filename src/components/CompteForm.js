import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';

function CompteForm() {
  const [compte, setCompte] = useState({ solde: '', dateCreation: '', type: 'COURANT' });

  const handleChange = (e) => {
    setCompte({ ...compte, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_BASE_URL}/comptes`, compte)
      .then(response => {
        alert('Compte ajouté');
        window.location.reload();
      })
      .catch(error => {
        console.error('Erreur:', error);
        alert('Erreur lors de l\'ajout du compte');
      });
  };

  return (
    <div className="container mt-4">
      <h2>Ajouter un Compte</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Solde</label>
          <input 
            type="number" 
            name="solde" 
            className="form-control" 
            onChange={handleChange}
            required 
          />
        </div>
        <div className="mb-3">
          <label>Date de Création</label>
          <input 
            type="date" 
            name="dateCreation" 
            className="form-control" 
            onChange={handleChange}
            required 
          />
        </div>
        <div className="mb-3">
          <label>Type</label>
          <select 
            name="type" 
            className="form-select" 
            onChange={handleChange}
            defaultValue="COURANT"
          >
            <option value="COURANT">Courant</option>
            <option value="EPARGNE">Épargne</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
}

export default CompteForm;