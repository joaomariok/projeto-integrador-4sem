const dummyData = 
[
    {
        linha: 5,
        paciente: {
            idade: 51,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Psiquiatria",
            veioAObito: false,
            transferencia: "Alta a pedido",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-03-02T00:08",
            horaSaida: "2021-03-02T08:42",
        },
    },
    {
        linha: 6,
        paciente: {
            idade: 65,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-14T09:17",	
            horaSaida: "2021-03-17T03:27",
        },
    },
    {
        linha: 7,
        paciente: {
            idade: 46,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Psiquiatria",
            veioAObito: false,
            transferencia: "H.P. Caibar Schutel",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-14T19:35",	
            horaSaida: "2021-03-15T09:37",
        },
    },
    {
        linha: 8,
        paciente: {
            idade: 42,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa Descalvado",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-15T17:26",	
            horaSaida: "2021-03-15T21:52",
        },
    },
    {
        linha: 9,
        paciente: {
            idade: 40,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa Descalvado",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-03-17T14:46",	
            horaSaida: "2021-03-17T16:29",
        },
    },
    {
        linha: 10,
        paciente: {
            idade: 44,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-17T15:57",	
            horaSaida: "2021-03-17T16:50",
        },
    },
    {
        linha: 11,
        paciente: {
            idade: 51,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-19T06:36",	
            horaSaida: "2021-03-19T16:49",
        },
    },
    {
        linha: 12,
        paciente: {
            idade: 70,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-19T11:08",	
            horaSaida: "2021-03-20T12:50",
        },
    },
    {
        linha: 13,
        paciente: {
            idade: 32,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa Descalvado",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-03-19T22:36",	
            horaSaida: "2021-03-20T00:27",
        },
    },
    {
        linha: 14,
        paciente: {
            idade: 53,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: true,
            transferencia: "Não se aplica",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-20T15:31",	
            horaSaida: "2021-03-21T01:30",
        },
    },
    {
        linha: 15,
        paciente: {
            idade: 74,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Alta médica",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-22T09:35",	
            horaSaida: "2021-03-22T19:52",
        },
    },
    {
        linha: 16,
        paciente: {
            idade: 34,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "H.E. Américo Brasiliense",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-03-22T17:30",	
            horaSaida: "2021-03-22T18:26",
        },
    },
    {
        linha: 17,
        paciente: {
            idade: 42,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Alta médica",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-22T18:19",	
            horaSaida: "2021-03-23T12:59",
        },
    },
    {
        linha: 18,
        paciente: {
            idade: 67,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Escola - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-23T10:05",	
            horaSaida: "2021-03-23T17:57",
        },
    },
    {
        linha: 19,
        paciente: {
            idade: 58,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa Descalvado",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-03-23T10:07",	
            horaSaida: "2021-03-23T17:15",
        },
    },
    {
        linha: 20,
        paciente: {
            idade: 50,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Alta médica",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-23T11:24",	
            horaSaida: "2021-03-23T17:16",
        },
    },
    {
        linha: 21,
        paciente: {
            idade: 84,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: true,
            transferencia: "Não se aplica",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-23T11:49",	
            horaSaida: "2021-03-26T22:50",
        },
    },
    {
        linha: 22,
        paciente: {
            idade: 45,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Escola - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-03-23T14:25",	
            horaSaida: "2021-03-26T13:46",
        },
    },
    {
        linha: 23,
        paciente: {
            idade: 47,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Alta médica",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-03-23T17:51",	
            horaSaida: "2021-03-25T03:00",
        },
    },
    {
        linha: 24,
        paciente: {
            idade: 83,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Alta médica",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-03-23T18:35",	
            horaSaida: "2021-03-25T02:58",
        },
    },
    {
        linha: 25,
        paciente: {
            idade: 64,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Padrão",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-03-24T02:19",	
            horaSaida: "2021-03-24T04:04",
        },
    },
    {
        linha: 26,
        paciente: {
            idade: 47,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Escola - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-03-25T03:20",	
            horaSaida: "2021-03-25T13:47",
        },
    },
    {
        linha: 27,
        paciente: {
            idade: 53,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Escola - São Carlos",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-26T04:18",	
            horaSaida: "2021-03-26T16:41",
        },
    },
    {
        linha: 28,
        paciente: {
            idade: 31,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Escola - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-26T09:10",	
            horaSaida: "2021-03-26T14:19",
        },
    },
    {
        linha: 29,
        paciente: {
            idade: 58,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "H.E. Américo Brasiliense",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-28T11:20",	
            horaSaida: "2021-03-28T17:10",
        },
    },
    {
        linha: 30,
        paciente: {
            idade: 43,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "H.E. Américo Brasiliense",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-03-28T21:32",	
            horaSaida: "2021-03-29T03:23",
        },
    },
    {
        linha: 31,
        paciente: {
            idade: 45,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa Descalvado",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-03-28T22:25",	
            horaSaida: "2021-03-29T14:42",
        },
    },
    {
        linha: 32,
        paciente: {
            idade: 47,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-29T05:08",	
            horaSaida: "2021-03-29T09:17",
        },
    },
    {
        linha: 33,
        paciente: {
            idade: 47,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-29T09:34",	
            horaSaida: "2021-03-29T10:15",
        },
    },
    {
        linha: 34,
        paciente: {
            idade: 47,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "H.E. Américo Brasiliense",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-29T12:41",	
            horaSaida: "2021-03-30T19:21",
        },
    },
    {
        linha: 35,
        paciente: {
            idade: 61,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-29T18:15",	
            horaSaida: "2021-03-30T01:12",
        },
    },
    {
        linha: 36,
        paciente: {
            idade: 57,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-29T18:31",	
            horaSaida: "2021-03-29T19:31",
        },
    },
    {
        linha: 37,
        paciente: {
            idade: 57,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "H.E. Américo Brasiliense",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-30T01:11",	
            horaSaida: "2021-03-30T03:30",
        },
    },
    {
        linha: 38,
        paciente: {
            idade: 61,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Escola - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-30T03:18",	
            horaSaida: "2021-03-30T11:52",
        },
    },
    {
        linha: 39,
        paciente: {
            idade: 55,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-03-30T10:38",	
            horaSaida: "2021-04-04T16:14",
        },
    },
    {
        linha: 40,
        paciente: {
            idade: 61,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Escola - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-30T15:01",	
            horaSaida: "2021-04-02T16:04",
        },
    },
    {
        linha: 41,
        paciente: {
            idade: 43,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Escola - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-03-31T13:49",	
            horaSaida: "2021-04-01T14:44",
        },
    },
    {
        linha: 42,
        paciente: {
            idade: 87,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Escola - São Carlos",
            gravidade: "Alta",
            vacinadoCovid: "nao",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-31T17:22",	
            horaSaida: "2021-04-01T21:46",
        },
    },
    {
        linha: 43,
        paciente: {
            idade: 74,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "",
            gravidade: "Média",
            vacinadoCovid: "dose2",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-03-31T22:19",	
            horaSaida: "2021-04-01T00:58",
        },
    },
    {
        linha: 44,
        paciente: {
            idade: 74,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "",
            gravidade: "Média",
            vacinadoCovid: "dose2",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-04-01T01:45",	
            horaSaida: "2021-04-01T03:33",
        },
    },
    {
        linha: 45,
        paciente: {
            idade: 57,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Neurologia-Neurocirurgia",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-04-01T14:04",	
            horaSaida: "2021-04-01T14:39",
        },
    },
    {
        linha: 46,
        paciente: {
            idade: 33,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Escola - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-04-01T14:25",	
            horaSaida: "2021-04-01T21:37",
        },
    },
    {
        linha: 47,
        paciente: {
            idade: 74,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa Descalvado",
            gravidade: "Média",
            vacinadoCovid: "dose2",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-04-01T14:41",	
            horaSaida: "2021-04-02T13:20",
        },
    },
    {
        linha: 48,
        paciente: {
            idade: 54,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Psiquiatria",
            veioAObito: false,
            transferencia: "Santa Casa Ibitinga",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-04-01T22:33",	
            horaSaida: "2021-04-02T18:10",
        },
    },
    {
        linha: 49,
        paciente: {
            idade: 52,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "",
            gravidade: "Média",
            vacinadoCovid: "nao",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-04-02T17:02",	
            horaSaida: "2021-04-02T20:18",
        },
    },
    {
        linha: 50,
        paciente: {
            idade: 35,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa Descalvado",
            gravidade: "Média",
            vacinadoCovid: "nao",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-04-02T17:20",	
            horaSaida: "2021-04-02T20:14",
        },
    },
    {
        linha: 51,
        paciente: {
            idade: 58,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa Descalvado",
            gravidade: "Média",
            vacinadoCovid: "nao",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-04-02T17:37",	
            horaSaida: "2021-04-02T20:03",
        },
    },
    {
        linha: 52,
        paciente: {
            idade: 52,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Escola - São Carlos",
            gravidade: "Alta",
            vacinadoCovid: "nao",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-04-02T21:28",	
            horaSaida: "2021-04-04T04:09",
        },
    },
    {
        linha: 53,
        paciente: {
            idade: 69,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "H.E. Américo Brasiliense",
            gravidade: "Média",
            vacinadoCovid: "dose2",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-04-02T21:46",	
            horaSaida: "2021-04-03T00:35",
        },
    },
    {
        linha: 54,
        paciente: {
            idade: 72,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "alta médica",
            gravidade: "Média",
            vacinadoCovid: "dose2",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-04-03T13:25",	
            horaSaida: "2021-04-04T15:23",
        },
    },
    {
        linha: 55,
        paciente: {
            idade: 52,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Escola - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-04-03T15:24",	
            horaSaida: "2021-04-05T12:32",
        },
    },
    {
        linha: 56,
        paciente: {
            idade: 53,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Carlos Fernando Malzoni",
            gravidade: "Média",
            vacinadoCovid: "nao",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-04-04T16:53",	
            horaSaida: "2021-04-05T08:34",
        },
    },
    {
        linha: 57,
        paciente: {
            idade: 58,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "H.E. Américo Brasiliense",
            gravidade: "Média",
            vacinadoCovid: "nao",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-04-05T20:10",	
            horaSaida: "2021-04-05T22:35",
        },
    },
    {
        linha: 58,
        paciente: {
            idade: 61,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "",
            gravidade: "Média",
            vacinadoCovid: "nao",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-04-05T22:34",	
            horaSaida: "2021-04-06T00:23",
        },
    },
    {
        linha: 59,
        paciente: {
            idade: 61,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Alta médica",
            gravidade: "Média",
            vacinadoCovid: "nao",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-04-06T06:55",	
            horaSaida: "2021-04-06T21:02",
        },
    },
    {
        linha: 60,
        paciente: {
            idade: 45,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "UPA Santa Felícia",
            gravidade: "Alta",
            vacinadoCovid: "nao",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-04-06T16:34",	
            horaSaida: "2021-04-07T10:10",
        },
    },
    {
        linha: 61,
        paciente: {
            idade: 74,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Padrão",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-04-06T21:29",	
            horaSaida: "2021-04-07T02:46",
        },
    },
    {
        linha: 62,
        paciente: {
            idade: 50,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Padrão",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-04-25T15:41",	
            horaSaida: "2021-04-25T17:21",
        },
    },
    {
        linha: 63,
        paciente: {
            idade: 45,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Padrão",
            veioAObito: false,
            transferencia: "",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-04-25T18:00",	
            horaSaida: "2021-04-25T18:18",
        },
    },
    {
        linha: 64,
        paciente: {
            idade: 45,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Padrão",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-04-25T18:39",	
            horaSaida: "2021-04-25T19:38",
        },
    },
    {
        linha: 65,
        paciente: {
            idade: 19,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Psiquiatria",
            veioAObito: false,
            transferencia: "Paciente evadido",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-04-30T20:26",	
            horaSaida: "2021-05-01T09:44",
        },
    },
    {
        linha: 66,
        paciente: {
            idade: 47,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "nao",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-05-12T08:45",	
            horaSaida: "2021-05-13T07:47",
        },
    },
    {
        linha: 67,
        paciente: {
            idade: 16,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Padrão",
            veioAObito: false,
            transferencia: "",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-05-15T03:26",	
            horaSaida: "2021-05-17T14:52",
        },
    },
    {
        linha: 68,
        paciente: {
            idade: 88,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Padrão",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-05-15T14:49",	
            horaSaida: "2021-05-15T15:29",
        },
    },
    {
        linha: 69,
        paciente: {
            idade: 23,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Psiquiatria",
            veioAObito: false,
            transferencia: "",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-05-16T14:54",	
            horaSaida: "2021-05-16T15:34",
        },
    },
    {
        linha: 70,
        paciente: {
            idade: 23,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Psiquiatria",
            veioAObito: false,
            transferencia: "H.P. Caibar Schutel",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-05-17T09:18",	
            horaSaida: "2021-05-19T11:40",
        },
    },
    {
        linha: 71,
        paciente: {
            idade: 59,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Emilio Ribas",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-05-19T20:02",	
            horaSaida: "2021-05-22T22:46",
        },
    },
    {
        linha: 72,
        paciente: {
            idade: 60,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Padrão",
            veioAObito: false,
            transferencia: "",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-05-19T22:17",	
            horaSaida: "2021-05-22T11:33",
        },
    },
    {
        linha: 73,
        paciente: {
            idade: 74,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-05-21T15:29",	
            horaSaida: "2021-05-21T17:03",
        },
    },
    {
        linha: 74,
        paciente: {
            idade: 85,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Padrão",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-05-21T19:29",	
            horaSaida: "2021-05-22T11:39",
        },
    },
    {
        linha: 75,
        paciente: {
            idade: 74,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Cardiologia",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-05-21T19:45",	
            horaSaida: "2021-05-22T16:02",
        },
    },
    {
        linha: 76,
        paciente: {
            idade: 65,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Cardiologia",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-05-21T19:52",	
            horaSaida: "2021-05-22T12:19",
        },
    },
    {
        linha: 77,
        paciente: {
            idade: 74,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Vila Penteado",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-05-22T02:48",	
            horaSaida: "2021-05-23T15:06",
        },
    },
    {
        linha: 78,
        paciente: {
            idade: 40,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "UPA Santa Felícia",
            gravidade: "Alta",
            vacinadoCovid: "nao",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-05-22T11:44",	
            horaSaida: "2021-05-23T03:36",
        },
    },
    {
        linha: 79,
        paciente: {
            idade: 43,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: true,
            transferencia: "Não se aplica",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-05-23T18:06",	
            horaSaida: "2021-05-24T05:46",
        },
    },
    {
        linha: 80,
        paciente: {
            idade: 34,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Covid-19 Mun. Araraquara",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-05-25T10:56",	
            horaSaida: "2021-05-25T20:27",
        },
    },
    {
        linha: 81,
        paciente: {
            idade: 82,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-05-25T16:19",	
            horaSaida: "2021-05-26T17:10",
        },
    },
    {
        linha: 82,
        paciente: {
            idade: 61,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Alta",
            vacinadoCovid: "nao",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-05-26T13:14",	
            horaSaida: "2021-05-27T10:03",
        },
    },
    {
        linha: 83,
        paciente: {
            idade: 35,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-05-27T16:01",	
            horaSaida: "2021-05-27T16:27",
        },
    },
    {
        linha: 84,
        paciente: {
            idade: 29,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Covid-19 Mun. Araraquara",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-05-27T16:18",	
            horaSaida: "2021-05-27T18:31",
        },
    },
    {
        linha: 85,
        paciente: {
            idade: 35,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "UPA Santa Felícia",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-05-27T17:23",	
            horaSaida: "2021-05-28T17:10",
        },
    },
    {
        linha: 86,
        paciente: {
            idade: 46,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa Itápolis",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-05-27T17:59",	
            horaSaida: "2021-05-28T11:16",
        },
    },
    {
        linha: 87,
        paciente: {
            idade: 47,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "nao",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-05-28T11:34",	
            horaSaida: "2021-05-29T08:38",
        },
    },
    {
        linha: 88,
        paciente: {
            idade: 59,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Alta médica",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-05-31T16:08",	
            horaSaida: "2021-06-03T03:08",
        },
    },
    {
        linha: 89,
        paciente: {
            idade: 62,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Padrão",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-05-31T16:24",	
            horaSaida: "2021-05-31T18:19",
        },
    },
    {
        linha: 90,
        paciente: {
            idade: 65,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Cardiologia",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-05-31T17:35",	
            horaSaida: "2021-06-01T10:10",
        },
    },
    {
        linha: 91,
        paciente: {
            idade: 32,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "nao",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-06-06T21:57",	
            horaSaida: "2021-06-09T12:27",
        },
    },
    {
        linha: 92,
        paciente: {
            idade: 34,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-07T13:40",	
            horaSaida: "2021-06-09T18:55",
        },
    },
    {
        linha: 93,
        paciente: {
            idade: 23,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Alta médica",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-09T14:04",	
            horaSaida: "2021-06-10T23:17",
        },
    },
    {
        linha: 94,
        paciente: {
            idade: 39,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Alta",
            vacinadoCovid: "nao",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-09T19:47",	
            horaSaida: "2021-06-10T08:53",
        },
    },
    {
        linha: 95,
        paciente: {
            idade: 29,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Psiquiatria",
            veioAObito: false,
            transferencia: "",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-06-10T09:39",	
            horaSaida: "2021-06-12T16:48",
        },
    },
    {
        linha: 96,
        paciente: {
            idade: 80,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "UPA Santa Felícia",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-10T18:30",	
            horaSaida: "2021-06-11T12:21",
        },
    },
    {
        linha: 97,
        paciente: {
            idade: 60,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Padrão",
            veioAObito: false,
            transferencia: "Paciente evadido",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-12T14:45",	
            horaSaida: "2021-06-14T22:09",
        },
    },
    {
        linha: 98,
        paciente: {
            idade: 45,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Psiquiatria",
            veioAObito: false,
            transferencia: "",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-12T15:56",	
            horaSaida: "2021-06-14T18:41",
        },
    },
    {
        linha: 99,
        paciente: {
            idade: 57,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "UPA Santa Felícia",
            gravidade: "Média",
            vacinadoCovid: "nao",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-15T14:27",	
            horaSaida: "2021-06-15T23:09",
        },
    },
    {
        linha: 100,
        paciente: {
            idade: 59,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Escola - São Carlos",
            gravidade: "Alta",
            vacinadoCovid: "dose1",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-16T19:43",	
            horaSaida: "2021-06-17T12:36",
        },
    },
    {
        linha: 101,
        paciente: {
            idade: 96,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Padrão",
            veioAObito: false,
            transferencia: "Alta médica",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-17T11:37",	
            horaSaida: "2021-06-18T02:54",
        },
    },
    {
        linha: 102,
        paciente: {
            idade: 57,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Cardiologia",
            veioAObito: false,
            transferencia: "Alta médica",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-20T16:32",	
            horaSaida: "2021-06-22T05:06",
        },
    },
    {
        linha: 103,
        paciente: {
            idade: 78,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Escola - São Carlos",
            gravidade: "Alta",
            vacinadoCovid: "nao",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-21T03:25",	
            horaSaida: "2021-06-25T13:17",
        },
    },
    {
        linha: 104,
        paciente: {
            idade: 29,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Alta",
            vacinadoCovid: "nao",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-21T15:29",	
            horaSaida: "2021-06-22T07:49",
        },
    },
    {
        linha: 105,
        paciente: {
            idade: 44,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "UPA Santa Felícia",
            gravidade: "Alta",
            vacinadoCovid: "nao",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-22T22:15",	
            horaSaida: "2021-06-23T13:02",
        },
    },
    {
        linha: 106,
        paciente: {
            idade: 43,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa Descalvado",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-06-23T06:44",	
            horaSaida: "2021-06-23T09:44",
        },
    },
    {
        linha: 107,
        paciente: {
            idade: 58,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa Descalvado",
            gravidade: "Média",
            vacinadoCovid: "nao",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-06-23T16:34",	
            horaSaida: "2021-06-23T18:37",
        },
    },
    {
        linha: 108,
        paciente: {
            idade: 84,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Alta médica",
            gravidade: "Alta",
            vacinadoCovid: "dose2",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-23T21:58",	
            horaSaida: "2021-06-26T04:40",
        },
    },
    {
        linha: 109,
        paciente: {
            idade: 41,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Carlos Fernando Malzoni",
            gravidade: "Média",
            vacinadoCovid: "nao",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-06-25T14:39",	
            horaSaida: "2021-06-27T13:03",
        },
    },
    {
        linha: 110,
        paciente: {
            idade: 61,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Alta",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-06-26T02:44",	
            horaSaida: "2021-07-01T17:14",
        },
    },
    {
        linha: 111,
        paciente: {
            idade: 48,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "",
            gravidade: "Média",
            vacinadoCovid: "nao",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-06-26T13:28",	
            horaSaida: "2021-06-26T14:05",
        },
    },
    {
        linha: 112,
        paciente: {
            idade: 79,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-26T13:50",	
            horaSaida: "2021-06-27T15:13",
        },
    },
    {
        linha: 113,
        paciente: {
            idade: 48,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-06-26T14:12",	
            horaSaida: "2021-06-27T09:45",
        },
    },
    {
        linha: 114,
        paciente: {
            idade: 78,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Padrão",
            veioAObito: false,
            transferencia: "",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-26T14:23",	
            horaSaida: "2021-06-28T19:11",
        },
    },
    {
        linha: 115,
        paciente: {
            idade: 64,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "UPA Santa Felícia",
            gravidade: "Média",
            vacinadoCovid: "nao",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-26T22:27",	
            horaSaida: "2021-07-01T09:47",
        },
    },
    {
        linha: 116,
        paciente: {
            idade: 75,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Neurologia-Neurocirurgia",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-26T22:55",	
            horaSaida: "2021-06-27T08:33",
        },
    },
    {
        linha: 117,
        paciente: {
            idade: 66,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "H.E. Américo Brasiliense",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-27T18:11",	
            horaSaida: "2021-07-02T17:12",
        },
    },
    {
        linha: 118,
        paciente: {
            idade: 50,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "",
            gravidade: "Média",
            vacinadoCovid: "dose1",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-06-29T16:25",	
            horaSaida: "2021-06-30T21:07",
        },
    },
    {
        linha: 119,
        paciente: {
            idade: 68,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Cardiologia",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-07-02T14:18",	
            horaSaida: "2021-07-02T15:37",
        },
    },
    {
        linha: 120,
        paciente: {
            idade: 57,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Padrão",
            veioAObito: false,
            transferencia: "Hospital Escola - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-07-02T22:10",	
            horaSaida: "2021-07-02T23:52",
        },
    },
    {
        linha: 121,
        paciente: {
            idade: 79,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "UPA Santa Felícia",
            gravidade: "Alta",
            vacinadoCovid: "dose2",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-07-03T18:42",	
            horaSaida: "2021-07-05T23:41",
        },
    },
    {
        linha: 122,
        paciente: {
            idade: 93,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Padrão",
            veioAObito: true,
            transferencia: "Não se aplica",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-07-04T02:34",	
            horaSaida: "2021-07-04T15:54",
        },
    },
    {
        linha: 123,
        paciente: {
            idade: 69,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Padrão",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-07-04T03:31",	
            horaSaida: "2021-07-04T10:24",
        },
    },
    {
        linha: 124,
        paciente: {
            idade: 77,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Cardiologia",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-07-04T19:18",	
            horaSaida: "2021-07-05T18:29",
        },
    },
    {
        linha: 125,
        paciente: {
            idade: 52,
            genero: "M",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Padrão",
            veioAObito: false,
            transferencia: "Santa Casa da Misericórdia - São Carlos",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-07-05T09:05",	
            horaSaida: "2021-07-05T11:27",
        },
    },
    {
        linha: 126,
        paciente: {
            idade: 84,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Síndrome gripal",
            veioAObito: false,
            transferencia: "Hospital Covid-19 Municip. Araraquara",
            gravidade: "Alta",
            vacinadoCovid: "dose2",
            possuiComorbidades: true,
        },
        atendimento: {
            horaEntrada: "2021-07-05T10:38",	
            horaSaida: "2021-07-06T15:38",
        },
    },
    {
        linha: 127,
        paciente: {
            idade: 38,
            genero: "F",
            multiplicidade: 0,
        },
        prontuario: {
            sintomas: "Psiquiatria",
            veioAObito: false,
            transferencia: "H.P. Caibar Schutel",
            gravidade: "Média",
            vacinadoCovid: "indef",
            possuiComorbidades: false,
        },
        atendimento: {
            horaEntrada: "2021-07-06T09:08",	
            horaSaida: "2021-07-07T18:04",
        },
    },
]

module.exports = dummyData;