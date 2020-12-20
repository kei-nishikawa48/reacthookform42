// import { useState } from "react"
import { useForm } from "react-hook-form" //react-hook-formからuseFormをインポート

const App = () => {
  const {register,handleSubmit,errors} =useForm()　//useForm()から register(登録) handleSubmit(送信するときの関数) 
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(name, email, password)
  // }
  const signUp=(data)=>{
    console.log(data)
    // data={name:"",email:"",password:""}
  } //onSubmitした時に呼ばれる関数

  return (
    <form onSubmit={handleSubmit(signUp)}>
      <label>name</label>
      <input 
      name="name"  //react-hook-formで他のinputタグと判別するために付ける
      type="text"
      ref={register({
        required:"入力してください",
      })} //インプットタグをreact-hook-formに登録する　　　requiredというのは必須という意味
      //  onChange={(e) => setName(e.target.value)} 
      />
      {errors.name && errors.name.message}
      <label>email</label>
      <input 
      name="email"
      type="text" 
      ref={register}
      // onChange={(e) => setEmail(e.target.value)} 
      />
      <label>password</label>
      <input 
      name="password"
      type="password" 
      ref={register(
        {
          required:"入力してください",
          minLength:{
            value:6,
            message:"パスワードは６文字以上です"
          }
        }
      )}
      // onChange={(e) => setPassword(e.target.value)} 
      />
      {errors.password&&errors.password.message}
      <button type="submit">SignUp</button>
    </form>
  );
}

export default App;
