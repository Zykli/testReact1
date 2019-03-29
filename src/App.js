import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          icon: 'fas fa-star',
          title: 'курс молодого бойца',
          rewards: [
            {
              prize: 20,
              name: 'пряников'
            },
            {
              prize: 5,
              name: 'очков рейтинга'
            },
            {
              prize: 0,
              name: 'бейдж "Какой молодец"'
            }
          ],
          actions: [
            {
              status: 'finish',
              title: 'Заполнить профиль'
            },
            {
              status: 'in_progress',
              title: 'Пройти онлайн курс по продажам'
            },
            {
              status: 'not_ready',
              title: 'зайти в систему'
            },
            {
              status: 'not_ready',
              title: 'выпить воды'
            },
            {
              status: 'in_progress',
              title: 'выспаться'
            }
          ]
        },
        {
          icon: 'far fa-star',
          title: 'Выполнить план по продажам',
          rewards: [
            {
              prize: 40,
              name: 'пряников'
            },
            {
              prize: 0,
              name: 'бейдж "Добытчик"'
            }
          ],
          actions: [
            {
              status: 'finish',
              title: 'найти одного клинета'
            },
            {
              status: 'in_progress',
              title: 'найти второго клинета'
            },
            {
              status: 'not_ready',
              title: 'найти третьего клинета'
            },
            {
              status: 'not_ready',
              title: 'найти четвертого клинета'
            }
          ]
        },
        {
          icon: 'fas fa-star-of-life',
          title: 'Перевыполнить план по продажам',
          rewards: [
            {
              prize: 80,
              name: 'пряников'
            },
            {
              prize: 0,
              name: 'бейдж "Суперобытчик"'
            }
          ],
          actions: [
            {
              status: 'in_progress',
              title: 'перевыполнить план продаж в 2 раза'
            }
          ]
        },
      ]
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {

  }
  
  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
