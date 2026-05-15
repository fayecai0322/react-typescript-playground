import { useState } from "react";

interface DataForm {
  fullName: string;
  email: string;
  ticketType: string; //can i use type or enum
  needParking: boolean;
  dietaryNotes: string;
}
export default function EventRegistrationForm() {
  const [object, setObject] = useState<DataForm>({
    fullName: "",
    email: "",
    ticketType: "",
    needParking: false,
    dietaryNotes: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); //do not forget ({}) initial value

  //write a universal handle Change
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = e.target;

    // for checkbox, use target.checked, others use target.value.
    const newValue =
      e.target instanceof HTMLInputElement && e.target.type === "checkbox"
        ? e.target.checked
        : value;

    setObject((prev) => ({ ...prev, [name]: newValue }));
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    if (object.fullName.length < 3) {
      newErrors.fullName = "Full Name must be at least 3 characters";
    }

    setErrors(newErrors);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Form Input</h2>
        <label>
          Full Name
          <input
            name="fullName"
            value={object.fullName}
            onChange={handleChange}
          />
          {/* 展示name  */}
          {errors.fullName && <p>{errors.fullName}</p>}
        </label>
        <label>
          {" "}
          Email
          <input name="email" value={object.email} onChange={handleChange} />
        </label>
        <label>
          Ticket Type
          <select
            //ticketType need to match state object 里的字段名
            name="ticketType"
            value={object.ticketType}
            onChange={handleChange}
          >
            <option value="General">General</option>
            <option value="VIP">VIP</option>
            <option value="Student">Student</option>
          </select>
        </label>
        <label>
          CheckBox
          <input
            type="checkbox" //Checkbox会被认为是self defined component
            name="needParking"
            checked={object.needParking} //it should be checked here
            onChange={handleChange}
          />
        </label>
        <label>
          Dietary Notes
          <textarea
            name="dietaryNotes"
            value={object.dietaryNotes}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
