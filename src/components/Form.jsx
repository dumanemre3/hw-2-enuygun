import React, { useEffect, useState } from "react";
function Form() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleAdd = (e) => {
    // if (
    //   data.map((value, index) => {
    //     console.log(value);
    //     return console.log("data_deneme", value(`name+${index}`));
    //     // return deneme.length > 0;
    //   })
    // ) {
    //   setIsOpen(true);
    // }
    setIsOpen(true);
    setData([
      ...data,
      {
        [`name-${data.length}`]: "",
        [`gpc_lat-${data.length}`]: "",
        [`gpc_lon-${data.length}`]: "",
        [`SC-${data.length}`]: "",
      },
    ]);
  };

  const handleChange = (e) => {
    let index = e.target.name.split("-")[1];
    let tempData = [...data];
    tempData[index] = {
      ...tempData[index],
      [`${e.target.name}`]: e.target.value,
    };
    setData(tempData);
  };
  const handleSave = (e) => {
    e.preventDefault();
  };

  return (
    <form className="p-3" onSubmit={handleSave}>
      <div className="input-group" style={{ width: "25%" }}>
        <input
          type="text"
          aria-label="First name"
          className="form-control"
          placeholder="Güzergah"
        />
      </div>
      <hr></hr>
      <button
        className="btn btn-success btn-sm"
        onClick={(e) => {
          handleAdd();
        }}
      >
        YENİ EKLE
      </button>
      <hr></hr>
      {data.map((v, i) => {
        let keys = Object.keys(v);
        return (
          <div key={i} className="input-group">
            <input
              type="text"
              aria-label="First name"
              className="form-control"
              placeholder="name"
              name={keys[0]}
              onChange={(e) => handleChange(e)}
            ></input>
            <input
              type="text"
              aria-label="First name"
              className="form-control"
              placeholder="gpc_lat"
              name={keys[1]}
              onChange={(e) => handleChange(e)}
            ></input>
            <input
              type="text"
              aria-label="First name"
              className="form-control"
              placeholder="gpc_lon"
              name={keys[2]}
              onChange={(e) => handleChange(e)}
            ></input>
            <input
              type="text"
              aria-label="First name"
              className="form-control"
              placeholder="SC"
              name={keys[3]}
              onChange={(e) => handleChange(e)}
            ></input>
            <hr></hr>
          </div>
        );
      })}
      <hr></hr>
      <button
        className={`${
          isOpen ? "btn btn-warning btn-sm" : "btn btn-info btn-sm"
        }`}
        disabled={!isOpen}
        onClick={() => handleSave()}
      >
        KAYDET
      </button>
      <hr></hr>

      {data.length > 0 && <div>{JSON.stringify(data, null, 2)}</div>}
      <hr></hr>
      {data.length <= 0 ? (
        <div className="fs-5">Şuan hiç bir row bulunmamaktadır.</div>
      ) : (
        `Toplam da ${data?.length} adet row datam vardır.`
      )}
    </form>
  );
}
export default Form;
