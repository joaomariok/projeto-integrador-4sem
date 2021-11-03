import React, { useState } from 'react';
import api from '../../services/api';
import styles from './styles.module.scss'

export function Cadastro() {
  const [formData, setFormData] = useState({
    identMultiplicidade: '',
    entrada: '',
    saida: '',
    // permanencia: '',
    idade: '',
    sexo: 'notinfo',
    covid: 'covidNao',
    gravidade: 'gravidadeBaixa',
    sintoma: '',
    comorbidade: 'comobirdadesDesconhecido',
    obito: false,
    unidade: ''
  })

  const checkValues = () => {
    if (formData.idade < 0) {
      alert('A idade tem que ser maior que 0')
      return
    }
    // quais valores vamos checar?
    // entrada e saída tem limite de dias?
    // saida pode ser maior que hoje?
    // algum campo não pode ser nulo?
  }

  const clearForm = () => {
    setFormData({
      identMultiplicidade: '',
      entrada: '',
      saida: '',
      // permanencia: '',
      idade: '',
      sexo: 'notinfo',
      covid: 'covidNao',
      gravidade: 'gravidadeBaixa',
      sintoma: '',
      comorbidade: 'comobirdadesDesconhecido',
      obito: false,
      unidade: ''
    })
  }

  async function sendForm(e) {
    e.preventDefault();
    checkValues();

    const newRecord = {
      identMultiplicidade: formData.identMultiplicidade,
      entrada: formData.entrada,
      saida: formData.saida,
      // permanencia: formData.permanencia,
      idade: formData.idade,
      sexo: formData.sexo,
      covid: formData.covid,
      gravidade: formData.gravidade,
      sintoma: formData.sintoma,
      comorbidade: formData.comorbidade,
      obito: formData.obito,
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

    clearForm()
  }

  return (
    <div className={styles.contentWrapper}>
      <form className={styles.form}>
        <label className={styles.label}>
          Identificação de multiplicidade:
        </label>
        <input
          type="text"
          className={styles.input}
          onChange={(e) => setFormData({ ...formData, identMultiplicidade: e.target.value })}
          value={formData.identMultiplicidade}
        />
        <div className={styles.line} />

        <label className={styles.label}>
          Entrada:
        </label>
        <input
          type="datetime-local"
          className={styles.input}
          onChange={(e) => setFormData({ ...formData, entrada: e.target.value })}
          value={formData.entrada}
        />
        <div className={styles.line} />

        <label className={styles.label}>
          Saída:
        </label>
        <input
          type="datetime-local"
          className={styles.input}
          onChange={(e) => setFormData({ ...formData, saida: e.target.value })}
          value={formData.saida}
        />
        <div className={styles.line} />

        {/* <label className={styles.label}>
          Tempo de permanência:
        </label>
        <input
          type="time"
          className={styles.input}
          onChange={(e) => setFormData({ ...formData, permanencia: e.target.value })}
          value={formData.permanencia}
        />
        <div className={styles.line} /> */}

        <label className={styles.label}>
          Idade:
        </label>
        <input
          type="number"
          className={styles.input}
          onChange={(e) => setFormData({ ...formData, idade: e.target.value })}
          value={formData.idade}
        />
        <div className={styles.line} />

        <label className={styles.label}>
          Sexo:
        </label>
        <div onChange={(e) => setFormData({ ...formData, sexo: e.target.value })}>
          <label className={styles.radioLabel} htmlFor="masc">
            <input id="masc" type="radio" value="m" name="sexo" className={styles.radioButton} />
            Masculino
          </label>
          <label className={styles.radioLabel} htmlFor="fem">
            <input id="fem" type="radio" value="f" name="sexo" className={styles.radioButton} />
            Feminino
          </label>
          <label className={styles.radioLabel} htmlFor="notinfo">
            <input id="notinfo" type="radio" value="naoInfo" name="sexo" className={styles.radioButton} defaultChecked={true} />
            Não informado
          </label>
        </div>
        <div className={styles.line} />

        <label className={styles.label}>
          Vacinado COVID?
        </label>
        <select className={styles.select} onChange={(e) => setFormData({ ...formData, covid: e.target.value })} value={formData.covid}>
          <option className={styles.option} value="covid2dose">2ª DOSE</option>
          <option className={styles.option} value="covid1dose">1ª DOSE</option>
          <option className={styles.option} value="covidIndefinido">INDEFINIDO</option>
          <option className={styles.option} value="covidNao">NÃO</option>
        </select>
        <div className={styles.line} />

        <label className={styles.label}>
          Gravidade:
        </label>
        <select className={styles.select} onChange={(e) => setFormData({ ...formData, gravidade: e.target.value })} value={formData.gravidade}>
          <option className={styles.option} value="gravidadeBaixa">BAIXA</option>
          <option className={styles.option} value="gravidadeMedia">MÉDIA</option>
          <option className={styles.option} value="gravidadeAlta">ALTA</option>
        </select>
        <div className={styles.line} />

        <label className={styles.label}>
          Sintoma (Grupo):
        </label>
        <input
          type="text"
          className={styles.input}
          onChange={(e) => setFormData({ ...formData, sintoma: e.target.value })}
          value={formData.sintoma}
        />
        <div className={styles.line} />

        <label className={styles.label}>
          Possui comorbidades?
        </label>
        <select className={styles.select} onChange={(e) => setFormData({ ...formData, comorbidade: e.target.value })} value={formData.comorbidade}>
          <option className={styles.option} value="comobirdadesDesconhecido">DESCONHECIDO</option>
          <option className={styles.option} value="comobirdadesNao">NÃO</option>
          <option className={styles.option} value="comobirdadesSim">SIM</option>
        </select>
        <div className={styles.line} />

        <label className={styles.label}>
          Obito dentro da unidade?
        </label>
        <select className={styles.select} onChange={(e) => setFormData({ ...formData, obito: e.target.value })} value={formData.obito}>
          <option className={styles.option} value={false}>NÃO</option>
          <option className={styles.option} value={true}>SIM</option>
        </select>
        <div className={styles.line} />

        <label className={styles.label}>
          Unidade de transferência:
        </label>
        <input
          type="text"
          className={styles.input}
          onChange={(e) => setFormData({ ...formData, unidade: e.target.value })}
          value={formData.unidade}
        />
        <div className={styles.line} />
        <button
          className={styles.submitButton}
          onClick={(e) => sendForm(e)}>Cadastrar</button>
      </form>
    </div>
  );
};