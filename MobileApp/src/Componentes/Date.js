import React, { useState } from "react";
import Input from "../../Componentes/Input";
import { TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

// Faltar terminar de configurar
export default function Date() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false); // pop up
  const [data, setData] = useState(moment(new Date()).format("DD/MM/YYYY"));

  return (
    <>
      {
        // Configuração Date
        show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            is24Hour={true}
            display="default"
            onTouchCancel={() => setShow(false)} // Para fechar
            onChange={(event, date) => {
              setShow(false);
              setData(moment(date).format("DD/MM/YYYY"));
            }}
          />
        )
      }
      <TouchableOpacity onPress={() => setShow(true)}>
        <Input
          label="Data"
          value={data}
          left={<TextInput.Icon icon="calendar" />}
          editable={false}
        />
      </TouchableOpacity>
    </>
  );
}
