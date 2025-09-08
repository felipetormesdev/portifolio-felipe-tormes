import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './App.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  // Dados fictícios de exemplo
  const semanas = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
  const kmPorSemana = [20, 25, 22, 28];
  const paceMedio = [5.2, 5.0, 5.1, 4.9]; // em min/km

  const barData = {
    labels: semanas,
    datasets: [
      {
        label: 'Km por Semana',
        data: kmPorSemana,
        backgroundColor: 'rgba(0, 115, 177, 0.7)',
      },
    ],
  };

  const lineData = {
    labels: semanas,
    datasets: [
      {
        label: 'Pace Médio (min/km)',
        data: paceMedio,
        borderColor: 'rgba(255, 99, 132, 0.8)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.3,
      },
    ],
  };

  const totalKm = kmPorSemana.reduce((a, b) => a + b, 0);
  const mediaPace = (paceMedio.reduce((a, b) => a + b, 0) / paceMedio.length).toFixed(2);

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#0073b1' }}>Dashboard de Corrida</h1>

      <div style={{ marginBottom: '30px' }}>
        <Bar data={barData} />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <Line data={lineData} />
      </div>

      <div style={{ textAlign: 'center', fontSize: '18px', marginTop: '20px' }}>
        <p><strong>Total de Km:</strong> {totalKm} km</p>
        <p><strong>Pace Médio:</strong> {mediaPace} min/km</p>
      </div>
    </div>
  );
}

export default App;
