import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';

function TeacherList() {
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState([]);

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();
    const response = await api.get('classes', {
      params: {
        subject,
        week_day: weekDay,
        time,
      },
    });

    setTeachers(response.data);
  }

  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Estes são os proffys disponíveis'>
        <form id='search-teachers' onSubmit={searchTeachers}>
          <Select
            label='Materia'
            name='subject'
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
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
            value={weekDay}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
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
          <Input
            type='time'
            label='Hora'
            name='time'
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <button type='submit'>Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
