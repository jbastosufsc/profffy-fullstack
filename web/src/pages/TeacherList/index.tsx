import React from 'react';
import PageHeader from '../../components/PageHeader';

import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList() {
  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Estes são os proffys disponíveis'>
        <form id='search-teachers'>
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
          <Input type='time' label='Hora' name='time' />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
