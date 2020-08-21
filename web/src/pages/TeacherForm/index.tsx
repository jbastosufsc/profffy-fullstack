import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';

function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
  }

  return (
    <div id='page-teacher-form' className='container'>
      <PageHeader
        title='Que incrível que você quer dar aulas.'
        description='O primeiro passo é preencher o formulário de inscrição'
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input label='Nome completo' name='name' />
          <Input label='Avatar' name='avatar' />
          <Input label='Whatsapp' name='whatsapp' />
          <TextArea label='Biografia' name='bio' />
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            label='Materia'
            name='subject'
            options={[
              { value: 'artes', name: 'Artes' },
              { value: 'portugues', name: 'Português' },
              { value: 'matematica', name: 'Matemática' },
              { value: 'geografia', name: 'Geografia' },
              { value: 'fisica', name: 'Física' },
              { value: 'historia', name: 'História' },
              { value: 'quimica', name: 'Química' },
              { value: 'biologia', name: 'Biologia' },
            ]}
          />
          <Input label='Custo por hora da aula' name='cost' />
        </fieldset>
        <fieldset>
          <legend>
            Horários disponíveis
            <button onClick={addNewScheduleItem}>+ Novo horário</button>
          </legend>

          {scheduleItems.map((scheduleItem) => {
            return (
              <div key={scheduleItem.week_day} className='schedule-item'>
                <Select
                  label='Dia da semana'
                  name='week-day'
                  options={[
                    { value: '0', name: 'Domingo' },
                    { value: '1', name: 'Segunda-feira' },
                    { value: '2', name: 'Terça-feira' },
                    { value: '3', name: 'Quarta-feira' },
                    { value: '4', name: 'Quinta-feira' },
                    { value: '5', name: 'Sexta-feira' },
                    { value: '6', name: 'Sábado' },
                  ]}
                />
                <Input name='from' label='Das' type='time' />
                <Input name='to' label='Até' type='time' />
              </div>
            );
          })}
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt='Aviso importante' />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type='button'>Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
