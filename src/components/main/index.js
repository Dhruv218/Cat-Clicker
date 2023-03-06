import { useEffect, useState } from "react";
import "./main.css";

const cat_list = [
  {
    id: 1,
    name: "Creme Puff",
    category: "Tabby mix",
    img: "./images/Creme-puff.jpg",
    origin: "United States",
  },
  {
    id: 2,
    name: "Baby",
    category: "Black DSH",
    img: "./images/baby.jpg",
    origin: "United States",
  },
  {
    id: 3,
    name: "Puss",
    category: "Tabby",
    img: "./images/puss.jpg",
    origin: "United Kingdom",
  },
  {
    id: 4,
    name: "Great Grandma Wad",
    category: "Wichien Maat",
    img: "./images/Great Grandma Wad.jpg",
    origin: "Thailand",
  },
  {
    id: 5,
    name: "Ma",
    category: "Tabby DSH",
    img: "./images/ma.jpg",
    origin: "United Kingdom",
  },
  {
    id: 6,
    name: "Granpa Rexs Allen",
    category: "Sphynx-Devon Rex",
    img: "./images/Granpa Rexs Allen.jpg",
    origin: "United States",
  },
  {
    id: 7,
    name: "Spike",
    category: "Longhair (Ginger and white)",
    img: "./images/spike.jpg",
    origin: "United Kingdom",
  },
  {
    id: 8,
    name: "Rubble",
    category: "Maine Coon",
    img: "./images/rubble.jpg",
    origin: "United Kingdom",
  },
  {
    id: 9,
    name: "	Sasha",
    category: "Tortoiseshell cat",
    img: "./images/Sasha.jpg",
    origin: "New Zealand",
  },
];
const click_count = [5, 5, 5, 5, 5, 5, 5, 5, 5];

const Main = () => {
  const [data, setData] = useState(cat_list);
  const [click_data, setClickdata] = useState(click_count);
  const [selected, setSelect] = useState(1);
  const [name, setName] = useState("Creme Puff");
  const [img, setImg] = useState();
  const [click, setClick] = useState(5);

  function incrementclick(id) {
    const updatecounter = click_data.map((c, i) => {
      if (i === id - 1) {
        return c + 1;
      } else {
        return c;
      }
    });
    setClickdata(updatecounter);
  }

  function handleclick(id) {
    setSelect(id);
    setName(data[id - 1].name);
    setClick(click_data[id - 1]);
  }
  function resetall() {
    setName(data[selected - 1].name);
    setClick(click_data[selected - 1]);
  }
  function change_card_detail() {
    if (selected != -1) {
      const updatecat_list = data.map((cat) => {
        if (cat.id === selected) {
          name ? (cat.name = name) : (cat.name = cat.name);
          img ? (cat.img = img) : (cat.img = cat.img);
          return cat;
        } else {
          return cat;
        }
      });
      console.log(updatecat_list);
      setData(updatecat_list);
      const updatecounter = click_data.map((c, i) => {
        if (i === selected - 1) {
          click ? (c = Number(click)) : (c = c);
          return c;
        } else {
          return c;
        }
      });
      setClickdata(updatecounter);
    } else {
      setData([...data, { id: data.length + 1, name: name, img: img }]);
      setClickdata([...click_data, Number(click)]);
    }
  }
  function create_new_form() {
    setSelect(-1);
    setClick("");
    setImg("");
    setName("");
  }
  return (
    <>
      <div className="container">
        <div className="list-box">
          {data.map((cat) => {
            return (
              <div
                className={`list-item ${cat.id === selected ? `active` : ""}`}
              >
                <p className="">{cat.name} </p>
                <p className="click-count">{click_data[cat.id - 1]}</p>
              </div>
            );
          })}
        </div>
        {selected != -1 ? (
          <div className="card-edit">
            <div className="card-img">
              <img
                className="cat-img"
                src={data[selected - 1].img}
                alt="cat-img"
              />
            </div>
            <div className="card-desc">
              <p className="cat-name">{data[selected - 1].name}</p>
              <p className="cat-catg">{data[selected - 1].category}</p>
              <p className="cat-origin">{data[selected - 1].origin}</p>
              <p className="click-count">
                {"No. of Times Clicked :  " + click_data[selected - 1]}
              </p>
            </div>
          </div>
        ) : null}

        <div className="input-box">
          <div className="create-button" onClick={() => create_new_form()}>
            <div class="button_plus"></div>
            <div>
              <p>Create New Form</p>
            </div>
          </div>
          <p className="input-heading">Enter Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <p className="input-heading">Enter Image</p>
          <input
            type="text"
            placeholder="Enter image link"
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
          <p className="input-heading">Enter No. Of Click</p>
          <input
            type="number"
            value={click}
            onChange={(e) => {
              setClick(e.target.value);
            }}
          />
          <div className="submit-b-box">
            <button
              className="save-button"
              onClick={() => change_card_detail()}
            >
              Save
            </button>
            <button className="undo-button" onClick={() => resetall()}>
              Undo
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        {data.map((cat) => {
          return (
            <div className="card">
              <div
                className="card-img"
                onClick={() => {
                  incrementclick(cat.id);
                }}
              >
                <img className="cat-img" src={cat.img} alt="cat-img" />
              </div>
              <div className="card-desc">
                <p className="cat-name">{cat.name}</p>
                <p className="cat-catg">{cat.category}</p>
                <p className="cat-origin">{cat.origin}</p>
                <p className="click-count">
                  {"No. of Times Clicked :  " + click_data[cat.id - 1]}
                </p>
                <p className="card-link" onClick={() => handleclick(cat.id)}>
                  {" "}
                  Card Link
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Main;
