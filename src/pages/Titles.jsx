import React, { useState, useEffect } from 'react';
import TitleCard from '../components/TitleCard';

const Titles = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    // Simulação de dados de títulos
    const fetchTitles = async () => {
      const data = [
        { title: 'Campeonato Brasileiro', year: '1966' },
        { title: 'Copa Libertadores', year: '1976' },
        // Adicione mais títulos aqui
      ];
      setTitles(data);
    };

    fetchTitles();
  }, []);

  return (
    <div>
      <h2>Títulos do Cruzeiro</h2>
      <div className="card-container">
        {titles.map((title, index) => (
          <TitleCard key={index} title={title.title} year={title.year} />
        ))}
      </div>
    </div>
  );
};

export default Titles;
