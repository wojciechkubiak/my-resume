import { ChangeEvent, useContext } from "react";
import Input from "../../../common/Input";
import Textarea from "../../../common/Textarea";
import { EditCtx } from "../../../context/EditContext";

const Personal = () => {
  const editCtx = useContext(EditCtx);

  const handleUserInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    editCtx.setPersonal(event.target.name, event.target.value);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Input
        label="Imię"
        name="firstName"
        placeholder="Twoje imię, np. Jan"
        value={editCtx.personal.firstName}
        onChange={handleUserInput}
      />
      <Input
        label="Nazwisko"
        name="lastName"
        placeholder="Twoje nazwisko, np. Kowalski"
        value={editCtx.personal.lastName}
        onChange={handleUserInput}
      />
      <Input
        label="Tytuł"
        name="title"
        placeholder="Twój tytuł, np. programista"
        value={editCtx.personal.title}
        onChange={handleUserInput}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Twój adres email, np. jank@mail.com"
        value={editCtx.personal.email}
        onChange={handleUserInput}
      />
      <Input
        label="Telefon"
        name="phone"
        placeholder="Twój telefon"
        value={editCtx.personal.phone}
        onChange={handleUserInput}
      />
      <Textarea
        label="O mnie"
        name="about"
        placeholder="Kilka słów o Tobie"
        value={editCtx.personal.about}
        onChange={handleUserInput}
      />
    </div>
  );
};

export default Personal;
