import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';

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
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
          <Input label='Materia' name='subject' />
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
