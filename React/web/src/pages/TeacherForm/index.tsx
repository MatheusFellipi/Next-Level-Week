import React,{ useState } from "react";

import PageHeader from "../../components/pageHeader";
import Input from "../../components/Input";

import warningIcon from '../../assests/img/icons/warning.svg'
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import "./style.css";

//1hr 8min
function TeacherForm() {

  const [scheduleitems, setScheduleItems] = useState([
    {
      week_day: 0, from:' ', to:''
    },

  ])
  function addNewscheduleitems(){
   
    setScheduleItems([
      ...scheduleitems,
      {
        week_day: 0, from:' ', to:''
      },
    ])
    
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrivel que voce quer dar aulas."
        description="O primeiro passso é preencher esse formulario de inscriçao."
      />

      <main>
        <fieldset>
          <legend>Seu dados</legend>

          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="biografia"/>
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select 
          name="subject" 
          label="Matéria"
          options={[
            {value: 'Artes', label : 'Artes'},
            {value: 'Biologia', label : 'Biologia'},
            {value: 'Ciência', label : 'Ciência'},
            {value: 'Educação física', label : 'Educação física'},
            {value: 'física', label : 'física'},
            {value: 'Geografia ', label : 'Geografia'},
            {value: 'História', label : 'História'},
            {value: 'matemática', label : 'matemática'},
            {value: 'Português', label : 'Português'},
            {value: 'Química', label : 'Química'},
          ]}
          />
          <Input name="cost" label="Custo da sua hora por aula" />

        </fieldset>

        <fieldset>
          <legend>Horários disponíveis
          <button type='button' onClick={addNewscheduleitems}> 
          + Novo Horarios
          </button>
          </legend>

        {scheduleitems.map(scheduleitem => {
          return(

            <div key="scheduleItem.week_day" className="schedule-item">

            <Select 
            name="week_day" 
            label="Dia da semana"
            options={[
              {value: '0', label : 'Domingo'},
              {value: '1', label : 'Segunda-feira'},
              {value: '2', label : 'Terça-feira'},
              {value: ' 3 física', label : 'Quarta-feira'},
              {value: '4', label : 'Quinta-feira'},
              {value: '5 ', label : 'Sexta-feira'},
              {value: '6', label : 'Sábado'},
             
            ]}
            />
            <Input name="from" label="das" type="time" />
            <Input name="to" label="Até" type="time" />
            </div>
  
          )
        })}
        </fieldset>

        <footer>
            <p><img src={warningIcon} alt="Aviso importante"/>
            Importante <br />
            Preenchar todos os dados</p>
            <button type='button'> Salvar cadastro</button>
        
        </footer>

        
      </main>
    </div>
  );
}

export default TeacherForm;
