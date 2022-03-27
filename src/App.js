import Form from "./Materi/Form";

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;

// // import logo from './logo.svg';
// // import Form from "./Materi/Form";
// import { useForm } from "react-hook-form";
// import "./App.css";
// import content from "./Static";

// export default function App() {
//   const { register, handleSubmit, errors } = useForm();
//   const onSubmit = (data) => console.log(data);

//   return (
//     <div className="App">
//       <h1>React-Hook-Form</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {content.inputs.map((input, key) => {
//           return (
//             <div key={key}>
//               <p>
//                 <label>{input.label}</label>
//               </p>
//               <p>
//                 <input name={input.name} className="input" type={input.type} ref={register} />
//               </p>
//             </div>
//           );
//         })}
//         <button>submit</button>
//       </form>
//     </div>
//   );
// }
