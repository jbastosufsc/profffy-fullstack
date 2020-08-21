import React, { useState, useEffect, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';
import api from '../../services/api';

function TeacherForm() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  useEffect(() => {}, [name]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
  }

  function handleScheduleItemsValue(
    position: number,
    fieldName: string,
    value: string
  ) {
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (position === index) {
        return { ...scheduleItem, [fieldName]: value };
      }
      return scheduleItem;
    });
    setScheduleItems(updateScheduleItems);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api
      .post('classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        alert('Cadastro realizado com sucesso!');
        history.push('/');
      })
      .catch(() => {
        'Erro no cadastro!';
      });
    console.log({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule: scheduleItems,
    });
  }

  return (
    <div id='page-teacher-form' className='container'>
      <PageHeader
        title='Que incrível que você quer dar aulas.'
        description='O primeiro passo é preencher o formulário de inscrição'
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              label='Nome completo'
              name='name'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              label='Avatar'
              name='avatar'
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
            <Input
              label='Whatsapp'
              name='whatsapp'
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />
            <TextArea
              label='Biografia'
              name='bio'
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
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
            <Input
              label='Custo por hora da aula'
              name='cost'
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button onClick={addNewScheduleItem}>+ Novo horário</button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className='schedule-item'>
                  <Select
                    label='Dia da semana'
                    name='week-day'
                    value={scheduleItem.week_day}
                    onChange={(e) =>
                      handleScheduleItemsValue(
                        index,
                        'week_day',
                        e.target.value
                      )
                    }
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
                    name='from'
                    label='Das'
                    type='time'
                    value={scheduleItem.from}
                    onChange={(e) =>
                      handleScheduleItemsValue(index, 'from', e.target.value)
                    }
                  />
                  <Input
                    name='to'
                    label='Até'
                    type='time'
                    value={scheduleItem.to}
                    onChange={(e) =>
                      handleScheduleItemsValue(index, 'to', e.target.value)
                    }
                  />
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
            <button type='submit'>Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
