import React from "react";

export default class FormElement extends React.Component {
  state = {
    nama: "",
    jurusan: "",
    gender: "",
    alamat: "",
    member: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    nama: ${this.state.nama}
    jurusan: ${this.state.jurusan}
    gender: ${this.state.gender}
    alamat: ${this.state.alamat}
    member: ${this.state.member ? "YES" : "NO"}
    `);
    this.state({
      nama: "",
      jurusan: "",
      gender: "",
      alamat: "",
      member: false,
    });
  };

  render() {
    return (
      <div style={{ margin: "100px auto", border: "1px solid gray", padding: "20px" }}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nama :
            <br />
            <input type="text" name="nama" onChange={(e) => this.setState({ nama: e.target.value })} defaultValue={this.state.nama} />
          </label>
          <br />
          <label>
            Jurusan: <br />
            <select name="jurusan" onChange={(e) => this.setState({ jurusan: e.target.value })}>
              <option value="">Pilih Jurusan</option>
              <option value="TI">TI</option>
              <option value="SI">SI</option>
              <option value="DKV">DKV</option>
            </select>
          </label>
          <br />
          <label>
            Jenis Kelamin:
            <br />
            <input type="radio" value="Pria" name="gender" onChange={(e) => this.setState({ gender: e.target.value })} /> Pria
            <input type="radio" value="Wanita" name="gender" onChange={(e) => this.setState({ gender: e.target.value })} /> Wanita
          </label>
          <br />
          <label>
            Alamat:
            <br />
            <textarea cols="30" rows="10" name="alamat" onChange={(e) => this.setState({ alamat: e.target.value })} value={this.state.alamat}></textarea>
          </label>
          <br />
          <label>
            member:
            <input type="checkbox" checked={this.state.member} name="member" onChange={(e) => this.setState({ member: e.target.checked })} />
          </label>
          <br />
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
