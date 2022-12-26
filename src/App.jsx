import Button from "./common/Button";
import { Formik, Form } from "formik";

import { ReactComponent as TwitterIcon } from "./assets/icons/twitter.svg";
import Checkbox from "./common/Checkbox/Checkbox";

const validateToggle = (e) => {
  if (e !== true) return "выбирите хотя бы один чекбокс!";
};

const checkboxes = [
  {
    label: "чекбокс 1",
    id: "id1",
    name: "name1",
  },
  {
    label: "чекбокс 2",
    id: "id2",
    name: "name2",
  },
  {
    label: "чекбокс 3",
    id: "id3",
    name: "name3",
  },
  {
    label: "чекбокс 4",
    id: "id4",
    name: "name4",
  },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          toggle1: false,
          checked: [],
        }}
        onSubmit={async (values) => {
          await sleep(500);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            {checkboxes?.map(({ name, id, label }) => (
              <Checkbox
                key={id}
                label={label}
                id={id}
                name={name}
                validate={validateToggle}
              />
            ))}
            <Button line={true} type="submit">
              Додати в кошик
            </Button>
          </Form>
        )}
      </Formik>

      <Button line={true} color="accent">
        twitter
        <TwitterIcon />
      </Button>
    </div>
  );
}

export default App;
