import React from "react";

import PageHeader from "../../components/pageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from '../../components/Input'
import Select from "../../components/Select";



import "./style.css";

function TeacherList() {
  return (
    
    <div id="page-teacher-list" className="container">
    
      <PageHeader title="Estes são os proffys disponíveis">
      
        <form id="search-teacher">
        <Select 
          name="subject" 
          label="Matéria"
          options={[
            {value: 'Artes', label : 'Artes'},
            {value: 'Biologia', label : 'Biologia'},
            {value: 'Ciência', label : 'Ciência'},
            {value: ' Educaçao física', label : 'Educaçao física'},
            {value: 'física', label : 'física'},
            {value: 'Geografia ', label : 'Geografia'},
            {value: 'História', label : 'História'},
            {value: 'matemática', label : 'matemática'},
            {value: 'Português', label : 'Português'},
            {value: 'Química', label : 'Química'},
          ]}
          />
         <Select 
          name="week_day" 
          label="Dia da semana"
          options={[
            {value: '0', label : 'Domingo'},
            {value: '1', label : 'Segunda-feira'},
            {value: '2', label : 'Terça-feira'},
            {value: ' 3 física', label : 'Quarda-feire'},
            {value: '4', label : 'Quinta-feira'},
            {value: '5 ', label : 'Sexta-feira'},
            {value: '6', label : 'Sabado'},
           
          ]}
          />
          <Input type="time" name="time" label="Hora" />
         
    
        </form>
      
      </PageHeader>
      
      <main>
        
       <TeacherItem/>
    
      </main>
    
    </div>
  );
}

export default TeacherList;
