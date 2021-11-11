import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import { Bar } from 'react-chartjs-2'
import api from '../../services/api';

export function GraficoHorasDeEspera() {
    const [valores, setValores] = useState([]);
    const [media, setMedia] = useState(0);
    const [permanencias, setPermanencias] = useState([]);

    // ARRAY PARA MEXER NAS FAIXAS DE HORÁRIO
    const LIST_OF_RANGES = [6, 12, 24, 48];

    function getListOfRanges(values) {
        const rangeCount = Array(LIST_OF_RANGES.length + 1).fill(0);
        const ranges = LIST_OF_RANGES.map((i) => i * 60);

        values.forEach((value) => {
            for (let range = 0; range < ranges.length; range++) {
                if (value <= ranges[range]) {
                    rangeCount[range]++;
                    break;
                }

                if (ranges[range] === ranges.at(-1)) {
                    rangeCount[rangeCount.length - 1]++;
                    break;
                }
            }
        });

        return rangeCount;
    }

    function getLabelsForChart(list) {
        const labels = Array(list.length + 1).fill('');

        for (let i = 0; i < labels.length; i++) {
            if (i === 0) {
                labels[i] = `Até ${list[i]}h (${permanencias[i]}/${valores.length})`;
            }
            else if (i === labels.length - 1) {
                labels[i] = `Mais de ${list[i - 1]}h (${permanencias[i]}/${valores.length})`;
            }
            else {
                labels[i] = `Entre ${list[i - 1]}h e ${list[i]}h (${permanencias[i]}/${valores.length})`;
            }
        }

        return labels;
    }

    function getAverageWaitingTime(values) {
        return values.reduce((prev, curr) => prev + curr) / values.length;
    }

    function getFormattedTime(min) {
        const hours = Math.floor(min / 60);
        const minutes = Math.floor(min % 60);

        return `${hours}h ${minutes}min`;
    }

    useEffect(async () => {
        const response = await api.get("/permanence");

        const listOfValues = response.data.map((i) => i.permanencia);
        setValores(listOfValues);

        // const testListOfValues = [2, 5, 10, 360, 450, 590, 600, 900, 1300, 1400, 2000, 3000, 4000];
        // const listOfRanges = getListOfRanges(testListOfValues);
        const listOfRanges = getListOfRanges(listOfValues);
        setPermanencias(listOfRanges);

        // setMedia(getAverageWaitingTime(testListOfValues));
        setMedia(getAverageWaitingTime(listOfValues));
    }, []);

    const data = {
        labels: getLabelsForChart(LIST_OF_RANGES),
        datasets: [
            {
                label: 'Ocorrências por período de espera',
                data: permanencias,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 2,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                grid: {
                    color: "transparent"
                },
                ticks: {
                    font: {
                        size: 16
                    },
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: "#383838"
                },
                ticks: {
                    stepSize: 2,
                    maxTicksLimit: 21,
                    font: {
                        size: 16
                    },
                },
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
      
    return (
        <div className={styles.contentWrapper}>
            <h1>Gráfico de ocorrências por faixa de permanência</h1>
            <h2>Média de permanência: [ {getFormattedTime(media)} ] em [ {valores.length} ] casos</h2>
            <Bar className={styles.chart} data={data} options={options}/>
        </div>
    );
};