'use client';
import React, { useState, useEffect } from 'react';
import styles from './DogBreedsList.module.css';
import Layout from '../fixLayout';
import FloatingButton from '../FloatingButton';

interface Breeds {
  [key: string]: string[];
}

const DogBreedsList: React.FC = () => {
  const [dogBreeds, setDogBreeds] = useState<Breeds>({});
  const [catBreeds, setCatBreeds] = useState<Breeds>({});
  const [loading, setLoading] = useState(true);
  const [dogBreedImages, setDogBreedImages] = useState<{ [key: string]: string }>({});
  const [catBreedImages, setCatBreedImages] = useState<{ [key: string]: string }>({});
  const [selectedDogBreed, setSelectedDogBreed] = useState<string>(''); 
  const [selectedCatBreed, setSelectedCatBreed] = useState<string>(''); 
  const [selectedDogBreedImage, setSelectedDogBreedImage] = useState<string>(''); 
  const [selectedCatBreedImage, setSelectedCatBreedImage] = useState<string>(''); 

  useEffect(() => {
    const fetchDogBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        setDogBreeds(data.message);
      } catch (error) {
        console.error('Erro ao buscar as raças de cães:', error);
      }
    };

    const fetchCatBreeds = async () => {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/breeds', {
          headers: {
            'x-api-key': 'YOUR_API_KEY' // Substitua pela sua chave API
          }
        });
        const data = await response.json();
        const breedsMap: Breeds = {};
        data.forEach((breed: any) => {
          breedsMap[breed.id] = [];
        });
        setCatBreeds(breedsMap);
      } catch (error) {
        console.error('Erro ao buscar as raças de gatos:', error);
      }
    };

    fetchDogBreeds();
    fetchCatBreeds();
    setLoading(false);
  }, []);

  const fetchDogBreedImage = async (breed: string) => {
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
      const data = await response.json();
      setDogBreedImages((prevImages) => ({
        ...prevImages,
        [breed]: data.message,
      }));
    } catch (error) {
      console.error(`Erro ao buscar imagem para a raça ${breed}:`, error);
    }
  };

  const fetchCatBreedImage = async (breed: string) => {
    try {
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`, {
        headers: {
          'x-api-key': 'YOUR_API_KEY' // Substitua pela sua chave API
        }
      });
      const data = await response.json();
      if (data.length > 0) {
        setCatBreedImages((prevImages) => ({
          ...prevImages,
          [breed]: data[0].url,
        }));
      }
    } catch (error) {
      console.error(`Erro ao buscar imagem para a raça ${breed}:`, error);
    }
  };

  useEffect(() => {
    if (Object.keys(dogBreeds).length > 0) {
      Object.keys(dogBreeds).forEach((breed) => {
        fetchDogBreedImage(breed);
      });
    }
  }, [dogBreeds]);

  useEffect(() => {
    if (Object.keys(catBreeds).length > 0) {
      Object.keys(catBreeds).forEach((breed) => {
        fetchCatBreedImage(breed);
      });
    }
  }, [catBreeds]);

  const handleBrowseDogBreed = async () => {
    if (selectedDogBreed) {
      try {
        const response = await fetch(`https://dog.ceo/api/breed/${selectedDogBreed}/images/random`);
        const data = await response.json();
        setSelectedDogBreedImage(data.message);
      } catch (error) {
        console.error(`Erro ao buscar imagem para a raça ${selectedDogBreed}:`, error);
      }
    }
  };

  const handleBrowseCatBreed = async () => {
    if (selectedCatBreed) {
      try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${selectedCatBreed}`, {
          headers: {
            'x-api-key': 'YOUR_API_KEY' // Substitua pela sua chave API
          }
        });
        const data = await response.json();
        if (data.length > 0) {
          setSelectedCatBreedImage(data[0].url);
        }
      } catch (error) {
        console.error(`Erro ao buscar imagem para a raça ${selectedCatBreed}:`, error);
      }
    }
  };

  if (loading) {
    return <p>Carregando raças...</p>;
  }

  return (
    <Layout>
      <div className={styles.containerum}>
        <h1>Sobre Raças:</h1><br/><br/><br/>
        <h2>Cachorros</h2>
        <select
          value={selectedDogBreed}
          onChange={(e) => setSelectedDogBreed(e.target.value)}
          className={styles.select}
        >
          <option value="">Selecione uma raça</option>
          {Object.keys(dogBreeds).map((breed) => (
            <option key={breed} value={breed}>
              {breed.charAt(0).toUpperCase() + breed.slice(1)}
            </option>
          ))}
        </select>
        <button onClick={handleBrowseDogBreed} className={styles.button}>Procurar Raça</button>

        {selectedDogBreedImage && (
          <div>
            <h3>Raça: {selectedDogBreed.charAt(0).toUpperCase() + selectedDogBreed.slice(1)}</h3>
            <img
              className={styles.selectedBreedImage}
              src={selectedDogBreedImage}
              alt={`${selectedDogBreed} dog`}
            />
          </div>
        )}

        <h2>Gatos</h2>
        <select
          value={selectedCatBreed}
          onChange={(e) => setSelectedCatBreed(e.target.value)}
          className={styles.select}
        >
          <option value="">Selecione uma raça</option>
          {Object.keys(catBreeds).map((breed) => (
            <option key={breed} value={breed}>
              {breed.charAt(0).toUpperCase() + breed.slice(1)}
            </option>
          ))}
        </select>
        <button onClick={handleBrowseCatBreed} className={styles.button}>Procurar Raça</button>

        {selectedCatBreedImage && (
          <div>
            <h3>Raça: {selectedCatBreed.charAt(0).toUpperCase() + selectedCatBreed.slice(1)}</h3>
            <img
              className={styles.selectedBreedImage}
              src={selectedCatBreedImage}
              alt={`${selectedCatBreed} cat`}
            />
          </div>
        )}
      </div>
      <FloatingButton><div></div></FloatingButton>
    </Layout>
  );
};

export default DogBreedsList;

// Falta esse mandar para o Luiz