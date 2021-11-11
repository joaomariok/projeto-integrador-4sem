import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import { Bar } from 'react-chartjs-2'
import api from '../../services/api';

export function GraficoPermaneciaPorGravidade() {

    const [list, setList] = useState([]);
    const [unique, setUnique] = useState([]);
    const [averageHours, setAverageHours] = useState([]);
    const [entries, setEntries] = useState([]);

    const labels = ["Baixa", "Média", "Alta"];

    function getAverageWaitingTime(values) {
        return values.reduce((prev, curr) => prev + curr) / values.length;
    }

    function getFormattedTime(h) {
        const hours = Math.floor(h);
        const minutes = Math.round((h - Math.floor(h)) * 60);

        return `${hours}h ${minutes}min`;
    }

    function convertMinutesToHours(min) {
        return min / 60;
    }

    useEffect(async () => {
        const { data } = await api.get("/severity-and-permanence");
        setList(data);

        const uniqueValues = [...new Set(data.map(item => item.gravidade))];
        setUnique(uniqueValues);

        const averagePermanence = labels.map((label) => {
            const filteredData = data
                                    .filter((value) => value.gravidade === label)
                                    .map((d) => d.permanencia);

            return filteredData.length > 0 ? 
                    getAverageWaitingTime(filteredData) :
                    0;
        });
        
        const averageHoursTemp = averagePermanence.map((i) => convertMinutesToHours(i));
        setAverageHours(averageHoursTemp);

        const entriesNumber = labels.map((label) => {
            const d = data.filter((value) => value.gravidade === label)
            return d.length;
        });
        setEntries(entriesNumber);
    }, []);

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Permanência por Gravidade',
                data: averageHours,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
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
                    callback: (val, index) => { return (val + "h") },
                    stepSize: 2,
                    maxTicksLimit: 21,
                    font: {
                        size: 16
                    },
                }
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
            <h1>Gráfico de espera média por gravidade</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Tempo de espera médio com gravidade {labels[0]}:</td>
                        <td><strong>{getFormattedTime(averageHours[0])}</strong></td>
                        <td>{entries[0]}/{list.length}</td>
                    </tr>
                    <tr>
                        <td>Tempo de espera médio com gravidade {labels[1]}:</td>
                        <td><strong>{getFormattedTime(averageHours[1])}</strong></td>
                        <td>{entries[1]}/{list.length}</td>
                    </tr>
                    <tr>
                        <td>Tempo de espera médio com gravidade {labels[2]}:</td>
                        <td><strong>{getFormattedTime(averageHours[2])}</strong></td>
                        <td>{entries[2]}/{list.length}</td>
                    </tr>
                </tbody>
            </table>
            <Bar className={styles.chart} data={data} options={options}/>
        </div>
    );
};