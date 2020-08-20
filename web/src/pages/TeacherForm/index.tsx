import React from 'react';
import PageHeader from '../../components/PageHeader';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';

function TeacherForm() {
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
