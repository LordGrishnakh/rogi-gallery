import React, { useState } from "react";
import classes from "./About.module.scss";

type contactId = "gitHub" | "email" | "telephone";

const About = () => {
  const [gitHUb, setGitHub] =
    useState<"GitHub" | "https://github.com/lordgrishnakh">("GitHub");
  const [email, setEmail] = useState<"Email" | "igorbir93@gmail.com">("Email");
  const [phone, setPhone] = useState<"Телефон" | "+7(985)625-16-18">("Телефон");

  const showText = (contactId: contactId) => {
    switch (contactId) {
      case "gitHub":
        setGitHub("https://github.com/lordgrishnakh");
        break;
      case "email":
        setEmail("igorbir93@gmail.com");
        break;
      case "telephone":
        setPhone("+7(985)625-16-18");
        break;
      default:
        break;
    }
  };

  return (
    <div className={classes.about}>
      <h1>Обо мне</h1>
      <p>
        Звать <abbr title="Он же Rogi">Игорь</abbr> , занимаюсь веб-разработкой
        с октября 2019 года, специализируюсь на фронтенд разработке на JS/TS +
        React, но имею убеждение, что технологии, с помощью которых реализуются
        проекты, не так важны, как сами проекты. Просто понравился реакт, на нём
        и педалю на данный момент.
      </p>
      <p>Трудолюбив и ответственнен</p>
      <p>
        Если ищете человека подобного профиля, товарищ из "Берген.ИТ" - я к
        вашим услугам
      </p>
      <div className={classes.links}>
        <h2>Контакты</h2>
        <div>
          <i
            className="fab fa-github fa-2x"
            onMouseEnter={() => showText("gitHub")}
          >
            {gitHUb}
          </i>
        </div>
        <br />
        <div onMouseEnter={() => showText("email")}>
          <i className="fas fa-envelope-square fa-2x">{email}</i>
        </div>
        <br />
        <div onMouseEnter={() => showText("telephone")}>
          <i className="fas fa-phone-square fa-2x">{phone}</i>
        </div>
      </div>
    </div>
  );
};

export default About;
