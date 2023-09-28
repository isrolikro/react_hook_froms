import './RegularForm.css';
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  username: string;
  email: string;
  password: string;
}

const RegularForm = () => {
  const { register, handleSubmit } = useForm<FormData>(); 

  const onSubmit: SubmitHandler<FormData> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username",{ required: true, minLength: 2 })} placeholder="Username" />
      <input {...register("email",{required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} placeholder="Email" />
      <input {...register("password",{required: true, pattern: /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/ })} placeholder="Password" />
      <button type="submit">Submit</button> 
    </form>
  );
};

export default RegularForm;
