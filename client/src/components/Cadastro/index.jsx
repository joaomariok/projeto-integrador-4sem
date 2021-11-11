import React, { useState } from 'react';
import api from '../../services/api';
import styles from './styles.module.scss'

export function Cadastro() {

  const listaSintomas = [
    "Cardiologia",
    "Neurologia/Neurocirurgia",
    "Padrão",
    "Psiquiatria",
    "Síndrome gripal",
    "Síndrome respiratória",
    "Síndrome respiratória aguda",
    "Sistema renal",
    "Desconhecido",
    "Não se aplica",
    "Outros"
  ];

  const listaUnidades = [
    "Alta a pedido",
    "Alta médica",
    "H.E. Américo Brasiliense",
    "H.P. Caibar Schutel",
    "Hospital Emilio Ribas",
    "Hospital Escola - São Carlos",
    "Hospital Vila Penteado",
    "Paciente evadido",
    "Santa Casa da Misericórdia - São Carlos",
    "Santa Casa Descalvado",
    "Santa Casa Ibitinga",
    "Hospital Carlos Fernando Malzoni",
    "UPA Santa Felícia",
    "Desconhecido",
    "Não se aplica",
    "Outros"
  ];

  const [formData, setFormData] = useState({
    multiplicidade: 0,
    entrada: '',
    saida: '',
    idade: 0,
    genero: 'N',
    covid: 'indef',
    gravidade: 'Baixa',
    sintoma: listaSintomas[0],
    comorbidade: false,
    obito: false,
    unidade: listaUnidades[0]
  });

  const isDataValid = () => {
    let dataValid = true;

    if (formData.idade <= 0 || formData.idade > 100) {
      alert('A idade tem que ser maior que 0 e menor que 100');
      dataValid = false;
    }

    if (formData.entrada == '' || formData.saida == '') {
      alert('Data não pode estar vazia');
      dataValid = false;
    }

    if (new Date(formData.saida) <= new Date(formData.entrada)) {
      alert('O momento de saída deve ser depois do de entrada');
      dataValid = false;
    }

    if (new Date(formData.saida) > Date.now()) {
      alert('O momento de saída deve ser antes de agora');
      dataValid = false;
    }

    if (new Date(formData.entrada) > Date.now()) {
      alert('O momento de entrada deve ser antes de agora');
      dataValid = false;
    }

    return dataValid;
  }

  const clearForm = () => {
    setFormData({
      multiplicidade: 0,
      entrada: '',
      saida: '',
      idade: 0,
      genero: 'N',
      covid: 'indef',
      gravidade: 'Baixa',
      sintoma: listaSintomas[0],
      comorbidade: false,
      obito: false,
      unidade: listaUnidades[0]
    })
  }

  async function sendForm(e) {
    e.preventDefault();

    if (!isDataValid()) {
      alert("Reveja validade dos dados do registro.");
      return;
    };

    const newRecord = {
      multiplicidade: parseInt(formData.multiplicidade),
      entrada: formData.entrada,
      saida: formData.saida,
      idade: parseInt(formData.idade),
      genero: formData.genero,
      covid: formData.covid,
      gravidade: formData.gravidade,
      sintoma: formData.sintoma,
      comorbidade: formData.comorbidade === 'true',
      obito: formData.obito === 'true',
      unidade: formData.unidade
    }

    const response = await api.post('/new-record', newRecord);
    
    // Check for unauthorized
    if (response.status == 401 || response.status == 404 || response.status == 502) {
      alert(`Erro ao enviar novo registro\n[status: ${response.status}]`);
    }
    else if (response.status == 200) {
      alert("Novo registro salvo com sucesso");
    }
    else {
      alert("Status não reconhecido");
    }

    clearForm();
  }

  return (
    <div className={styles.contentWrapper}>
      <form className={styles.form}>
        <label htmlFor="identification" className={styles.label}>
          Identificação de multiplicidade:
        </label>
        <input
          id="identification" 
          name="identification"
          type="number"
          className={styles.input}
          onChange={(e) => setFormData({ ...formData, multiplicidade: e.target.value })}
          value={formData.multiplicidade}
        />

        <div className={styles.line} />

        <label htmlFor="checkInTime" className={styles.label}>
          Hora de entrada:
        </label>
        <input
          id="checkInTime" 
          name="checkInTime"
          type="datetime-local"
          className={styles.input}
          onChange={(e) => setFormData({ ...formData, entrada: e.target.value })}
          value={formData.entrada}
        />

        <div className={styles.line} />

        <label htmlFor="checkOutTime" className={styles.label}>
          Hora de saída:
        </label>
        <input
          id="checkOutTime" 
          name="checkOutTime"
          type="datetime-local"
          className={styles.input}
          onChange={(e) => setFormData({ ...formData, saida: e.target.value })}
          value={formData.saida}
        />

        <div className={styles.line} />

        <label htmlFor="age" className={styles.label}>
          Idade:
        </label>
        <input
          id="age" 
          name="age"
          type="number"
          min="1"
          max="100"
          className={styles.input}
          onChange={(e) => setFormData({ ...formData, idade: e.target.value })}
          value={formData.idade}
        />

        <div className={styles.line} />

        <label htmlFor="gender" className={styles.label} >
          Gênero:
        </label>
        <select
          id="gender" 
          name="gender"
          className={styles.select}
          onChange={(e) => setFormData({ ...formData, genero: e.target.value })}
          value={formData.genero}
        >
          <option id="M" value="M">MASCULINO</option>
          <option id="F" value="F">FEMININO</option>
          <option id="N" value="N">NÃO INFORMADO</option>
        </select>

        <div className={styles.line} />

        <label htmlFor="covid" className={styles.label}>
          Vacinado contra COVID?
        </label>
        <select 
          id="covid" 
          name="covid"
          className={styles.select} 
          onChange={(e) => setFormData({ ...formData, covid: e.target.value })} 
          value={formData.covid}
        >
          <option id="dose3" className={styles.option} value="dose3">3ª DOSE</option>
          <option id="dose2" className={styles.option} value="dose2">2ª DOSE</option>
          <option id="dose1" className={styles.option} value="dose1">1ª DOSE</option>
          <option id="nao" className={styles.option} value="nao">NÃO</option>
          <option id="indef" className={styles.option} value="indef">INDEFINIDO</option>
        </select>

        <div className={styles.line} />

        <label htmlFor="gravidade" className={styles.label}>
          Gravidade:
        </label>
        <select 
          id="gravidade" 
          name="gravidade"
          className={styles.select} 
          onChange={(e) => setFormData({ ...formData, gravidade: e.target.value })} 
          value={formData.gravidade}
        >
          <option id="Baixa" className={styles.option} value="Baixa">BAIXA</option>
          <option id="Média" className={styles.option} value="Média">MÉDIA</option>
          <option id="Alta" className={styles.option} value="Alta">ALTA</option>
        </select>

        <div className={styles.line} />

        <label htmlFor="sintoma" className={styles.label}>
          Sintoma (Grupo):
        </label>
        <select 
          id="sintoma" 
          name="sintoma"
          className={styles.select} 
          onChange={(e) => setFormData({ ...formData, sintoma: e.target.value })} 
          value={formData.sintoma}
        >
          {
            listaSintomas.map((item, index) => 
              <option 
                id={"sintoma" + index}
                key={"sintoma" + index} 
                className={styles.option} 
                value={item}>{item.toUpperCase()}
              </option>
            )
          }
        </select>
        {/* <input
          type="text"
          className={styles.input}
          onChange={(e) => setFormData({ ...formData, sintoma: e.target.value })}
          value={formData.sintoma}
        /> */}

        <div className={styles.line} />

        <label htmlFor="comorbidade" className={styles.label}>
          Possui comorbidades?
        </label>
        <select 
          id="comorbidade" 
          name="comorbidade"
          className={styles.select} 
          onChange={(e) => setFormData({ ...formData, comorbidade: e.target.value })} 
          value={formData.comorbidade}
        >
          {/* <option className={styles.option} value={false}>DESCONHECIDO</option> */}
          <option id="comorbidadeNao" className={styles.option} value={false}>NÃO</option>
          <option id="comorbidadeSim" className={styles.option} value={true}>SIM</option>
        </select>

        <div className={styles.line} />

        <label htmlFor="obito" className={styles.label}>
          Óbito dentro da unidade?
        </label>
        <select 
          id="obito" 
          name="obito"
          className={styles.select} 
          onChange={(e) => setFormData({ ...formData, obito: e.target.value })} 
          value={formData.obito}
        >
          <option id="obitoNao" className={styles.option} value={false}>NÃO</option>
          <option id="obitoSim" className={styles.option} value={true}>SIM</option>
        </select>

        <div className={styles.line} />

        <label htmlFor="transferencia" className={styles.label}>
          Unidade de transferência:
        </label>
        <select 
          id="transferencia" 
          name="transferencia"
          className={styles.select} 
          onChange={(e) => setFormData({ ...formData, unidade: e.target.value })} 
          value={formData.unidade}
        >
          {
            listaUnidades.map((item, index) => 
              <option 
                id={"transferencia" + index} 
                key={"transferencia" + index} 
                className={styles.option} 
                value={item}>{item}
              </option>
            )
          }
        </select>
        {/* <input
          type="text"
          className={styles.input}
          onChange={(e) => setFormData({ ...formData, unidade: e.target.value })}
          value={formData.unidade}
        /> */}

        <div className={styles.line} />

        <button
          className={styles.submitButton}
          onClick={(e) => sendForm(e)}>CADASTRAR</button>
      </form>
    </div>
  );
};