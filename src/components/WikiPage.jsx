import React, { useState, useEffect } from 'react';
import { Cherry, FileText, Users, Moon, Sun } from 'lucide-react';
import './WikiPage.css';
import avatar from "./avatar.png";

export default function WikiPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const rockerInfo = {
    name: "Ток",
    nickname: "tok_69",
    joinDate: "10.08.2022",
    age: "15",
    birthDate: "06.09.2009",
    birthPlace: "Сибирь"
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <div className={`wiki-page ${isDarkMode ? 'dark-theme' : ''}`}>
      <nav className="top-nav">
        <div className="nav-left">
          <a href="/" className="logo">
            <Cherry size={24} className="cherry-icon" />
            <span>Вишневые Аллеи</span>
          </a>
        </div>
        <div className="nav-links">
          <a href="https://alley-wiki.github.io/Pages/" className="nav-link">
            <FileText size={20} />
            <span>Статьи</span>
          </a>
          <a href="https://alley-wiki.github.io/creators/" className="nav-link">
            <Users size={20} />
            <span>Создатели/Редакторы</span>
          </a>
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      <main className="main-content">
        <div className="content-layout">
          <div className="content-wrapper">
            <div className="main-info section">
              <h2>Основная информация</h2>
              <p>
                Ток (tok_69) - участник 
                <a href="https://discord.gg/dRu68ERWFx" className="link"> Discord-сервера Вишневых Аллей</a>, зашел на сервер 10 августа 2022 года, увидев в рекомендациях творчество 
                <a href="/Cherru" className="link"> Черр</a>, а именно такие видео, как 
                "<a href="https://youtu.be/88BYU18NSYQ?si=7CP50hDSjklWnrH4" className="link">Аскорбинка | animation (ft.Lololoshka, Кавински) Идеальный мир</a>" и 
                "<a href="https://youtu.be/hpwbFvcqIjo?si=9lcM9lesrm_FBf8U" className="link">45 секунд шуток про руку (Идеальный мир) ft.Кейт, Радан, Райя</a>". 
                В дальнейшем, начал следить за творчеством 
                <a href="/Cherru" className="link"> Черр</a>.
              </p>

              <h2>Чем занимался после захода на сервер и причины бана</h2>
              <p>
                В сентябре ему банят первый аккаунт. 14 сентября 2022 года, он создаёт другой аккаунт. Этот аккаунт держится до 29-го сентября и улетает в бан. 
                Ныне больше не используется. Создаётся 3 аккаунт, который он использует сейчас.
              </p>
              <p>
                Причины бана: Хорни поведение, 5.2, оскорбление и конфликты с участниками.
              </p>

              <h2>Разбан</h2>
              <p>
                Проходит 370 дней с 29 сентября 2022 года, с последнего появления Тока, пока его не разбанивают. Ночью с 10 по 11 декабря 2023 года он ливает т.к. по его мнению 
                <a href="https://visneviye-allei-wiki.github.io/sai/" className="link"> Сай</a> устраивает раздачу мутов и предов всем подряд. Позже, а именно днём 11 числа, Tok возвращается обратно на 
                <a href="https://discord.gg/dRu68ERWFx" className="link"> сервер</a>.
              </p>

              <h2>Чем занимается сейчас</h2>
              <p>
                Сейчас он общается с людьми, но редко.
              </p>

              <h2>Интересные факты</h2>
              <ul>
                <li>Находится в браке с Рейтором больше 60 дней</li>
                <li>Живет в Сибири</li>
                <li>Ник в бравле: про</li>
              </ul>
            </div>

            <div className="infobox section">
              <h2>{rockerInfo.name}</h2>
              <img src={avatar} alt="Ток" className="avatar" />
              <table>
                <tbody>
                  <tr>
                    <td>Должность</td>
                    <td>Участник</td>
                  </tr>
                  <tr>
                    <td>Возраст</td>
                    <td>{rockerInfo.age}</td>
                  </tr>
                  <tr>
                    <td>Дата захода на сервер</td>
                    <td>{rockerInfo.joinDate}</td>
                  </tr>
                  <tr>
                    <td>Дата рождения</td>
                    <td>{rockerInfo.birthDate}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
