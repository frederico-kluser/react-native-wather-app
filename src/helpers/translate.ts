import {LANGUAGE} from '@env';

const idioms: any = {
  ptBR: {
    cityNameInput: 'Digite o nome da cidade',
    deleteItem: 'Deletar Item',
    daysOfWeek: [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ],
  },
  enUS: {
    cityNameInput: 'Enter the city name',
    deleteItem: 'Delete Item',
    daysOfWeek: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
  },
  esES: {
    cityNameInput: 'Escribe el nombre de la ciudad',
    deleteItem: 'Eliminar Item',
    daysOfWeek: [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ],
  },
};

const language = idioms[LANGUAGE];

export default language;
