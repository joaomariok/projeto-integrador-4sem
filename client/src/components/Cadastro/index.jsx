import axios from 'axios';
import React, { useState } from 'react';
import api from '../../services/api';
import styles from './styles.module.scss'

export function Cadastro() {
  const [formdata, setFormData] = useState({
    identMultiplicidade: '',
    entrada: '',
    saida: '',
    permanencia: '',
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
    if (formdata.idade < 0) {
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
      permanencia: '',
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
    e.preventDefault() // remove this line
    checkValues()
    let response
    var data = {
      identMultiplicidade: formdata.identMultiplicidade,
      entrada: formdata.entrada,
      saida: formdata.saida,
      permanencia: formdata.permanencia,
      idade: formdata.idade,
      sexo: formdata.sexo,
      covid: formdata.covid,
      gravidade: formdata.gravidade,
      sintoma: formdata.sintoma,
      comorbidade: formdata.comorbidade,
      obito: formdata.obito,
      unidade: formdata.unidade
    }
    try {
      response = await api.post('/novosregistros', JSON.stringify(data))
    } catch (e) {
      alert('aconteceu um erro')
      return
    }

    clearForm()
    console.log(response.statusText)
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
          onChange={(e) => setFormData({ ...formdata, identMultiplicidade: e.target.value })}
          value={formdata.identMultiplicidade}
        />
        <div className={styles.line} />

        <label className={styles.label}>
          Entrada:
        </label>
        <input
          type="datetime-local"
          className={styles.input}
          onChange={(e) => setFormData({ ...formdata, entrada: e.target.value })}
          value={formdata.entrada}
        />
        <div className={styles.line} />

        <label className={styles.label}>
          Saída:
        </label>
        <input
          type="datetime-local"
          className={styles.input}
          onChange={(e) => setFormData({ ...formdata, saida: e.target.value })}
          value={formdata.saida}
        />
        <div className={styles.line} />

        <label className={styles.label}>
          Tempo de permanência:
        </label>
        <input
          type="time"
          className={styles.input}
          onChange={(e) => setFormData({ ...formdata, permanencia: e.target.value })}
          value={formdata.permanencia}
        />
        <div className={styles.line} />

        <label className={styles.label}>
          Idade:
        </label>
        <input
          type="number"
          className={styles.input}
          onChange={(e) => setFormData({ ...formdata, idade: e.target.value })}
          value={formdata.idade}
        />
        <div className={styles.line} />

        <label className={styles.label}>
          Sexo:
        </label>
        <div onChange={(e) => setFormData({ ...formdata, sexo: e.target.value })}>
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
        <select className={styles.select} onChange={(e) => setFormData({ ...formdata, covid: e.target.value })} value={formdata.covid}>
          <option className={styles.option} value="covid2dose">2ª DOSE</option>
          <option className={styles.option} value="covid1dose">1ª DOSE</option>
          <option className={styles.option} value="covidIndefinido">INDEFINIDO</option>
          <option className={styles.option} value="covidNao">NÃO</option>
        </select>
        <div className={styles.line} />

        <label className={styles.label}>
          Gravidade:
        </label>
        <select className={styles.select} onChange={(e) => setFormData({ ...formdata, gravidade: e.target.value })} value={formdata.gravidade}>
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
          onChange={(e) => setFormData({ ...formdata, sintoma: e.target.value })}
          value={formdata.sintoma}
        />
        <div className={styles.line} />

        <label className={styles.label}>
          Possui comorbidades?
        </label>
        <select className={styles.select} onChange={(e) => setFormData({ ...formdata, comorbidade: e.target.value })} value={formdata.comorbidade}>
          <option className={styles.option} value="comobirdadesDesconhecido">DESCONHECIDO</option>
          <option className={styles.option} value="comobirdadesNao">NÃO</option>
          <option className={styles.option} value="comobirdadesSim">SIM</option>
        </select>
        <div className={styles.line} />

        <label className={styles.label}>
          Obito dentro da unidade?
        </label>
        <select className={styles.select} onChange={(e) => setFormData({ ...formdata, obito: e.target.value })} value={formdata.obito}>
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
          onChange={(e) => setFormData({ ...formdata, unidade: e.target.value })}
          value={formdata.unidade}
        />
        <div className={styles.line} />
        <button
          className={styles.submitButton}
          onClick={(e) => sendForm(e)}>Cadastrar</button>
      </form>
    </div>
  );
};