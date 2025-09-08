import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Semana 1', 'Semana 2', 'Semana 3'],
  datasets: [{ label: 'Km Corridos', data: [30, 35, 40], borderColor: 'blue' }]
};

function App() {
  return <Line data={data} />;
}

export default App;
