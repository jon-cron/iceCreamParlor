// const toppings = [
//   {
//     name: "sprinkles",
//     cost: 2,
//     quantity: 0,
//   },
//   {
//     name: "chocolate chips",
//     cost: 3,
//     quantity: 0,
//   },
//   {
//     name: "gummy worms",
//     cost: 10,
//     quantity: 0,
//   },
// ];

// const vessels = [
//   {
//     name: "waffle cone",
//     cost: 1,
//     quantity: 0,
//   },
//   {
//     name: "cup",
//     cost: 1,
//     quantity: 0,
//   },
//   {
//     name: "jug",
//     cost: 1,
//     quantity: 0,
//   },
// ];

// const iceCreams = [
//   {
//     name: "vanilla",
//     cost: 1,
//     quantity: 0,
//   },
//   {
//     name: "chocolate",
//     cost: 2,
//     quantity: 0,
//   },
//   {
//     name: "strawberry",
//     cost: 3,
//     quantity: 0,
//   },
// ];
const master = {
  toppings: [
    {
      name: "sprinkles",
      cost: 2,
      quantity: 0,
      image:
        "https://plus.unsplash.com/premium_photo-1663853494068-c9ff246da0fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5rbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "chocolate chips",
      cost: 3,
      quantity: 0,
      image:
        "https://plus.unsplash.com/premium_photo-1663853494068-c9ff246da0fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5rbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "gummy worms",
      cost: 10,
      quantity: 0,
      image:
        "https://plus.unsplash.com/premium_photo-1663853494068-c9ff246da0fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5rbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ],

  vessels: [
    {
      name: "waffle cone",
      cost: 1,
      quantity: 0,
      image:
        "https://plus.unsplash.com/premium_photo-1663853494068-c9ff246da0fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5rbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "cup",
      cost: 1,
      quantity: 0,
      image:
        "https://plus.unsplash.com/premium_photo-1663853494068-c9ff246da0fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5rbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "jug",
      cost: 1,
      quantity: 0,
      image:
        "https://plus.unsplash.com/premium_photo-1663853494068-c9ff246da0fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5rbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ],

  iceCreams: [
    {
      name: "vanilla",
      cost: 1,
      quantity: 0,
      image:
        "https://plus.unsplash.com/premium_photo-1663853494068-c9ff246da0fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5rbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "chocolate",
      cost: 2,
      quantity: 0,
      image:
        "https://plus.unsplash.com/premium_photo-1663853494068-c9ff246da0fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5rbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "strawberry",
      cost: 3,
      quantity: 0,
      image:
        "https://plus.unsplash.com/premium_photo-1663853494068-c9ff246da0fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5rbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ],
};

function drawMaster() {
  for (let key in master) {
    let items = master[key];
    let template = "";
    items.forEach((item) => {
      // if (item.quantity == 0) {
      template += `
              <div
              class="col-6 col-md-3 border m-2"
              onclick="purchaseItem('${key}', '${item.name}')"
            >
                <img
                  class="img-fluid"
                  src="${item.image}"
                  alt=""
                />
                <div class="d-flex justify-content-between">
                  <h4>${item.name}</h4>
                  <h4>${item.cost}</h4>
                </div>
            </div>`;
      // }
      document.getElementById(`${key}-item`).innerHTML = template;
      // drawCart();
    });
  }
}
drawMaster();

function purchaseItem(type, itemName) {
  let masterItem = master[type].find((m) => m.name == itemName);
  masterItem.quantity++;
  console.log(masterItem);
  drawCart();
  // if (masterItem.quantity > 0) {
  //   itemName.quantity++;
  // }
  // console.log(itemName, itemName.quantity);
}

function drawCart() {
  for (let key in master) {
    let items = master[key];
    let template = "";
    items.forEach((item) => {
      if (item.quantity > 0) {
        template += `
        <div class="d-flex justify-content-between">
        <h6>${item.name}</h6>
          <h6>${item.quantity}</h6>
          <h6>${item.cost}</h6>
          <h6>${item.cost * item.quantity}</h6>
      </div>`;
      }
      document.getElementById("cart").innerHTML = template;
    });
  }

  // let template = "";
  // toppings.forEach((t) => {
  //   if (t.quantity > 0) {
  //     console.log("added to cart");
  //     template += `<div class="d-flex justify-content-between">
  //     <h6>${t.name}</h6>
  //       <h6>${t.quantity}</h6>
  //       <h6>${t.cost}</h6>
  //       <h6>${t.cost * t.quantity}</h6>
  //   </div>`;
  //   }
  //   document.getElementById("cart").innerHTML = template;
  // });
  // drawTotal();
}

function drawTotal() {
  let total = 0;
  toppings.forEach((t) => {
    total += t.quantity * t.cost;
  });
  vessels.forEach((v) => {
    total += v.cost * v.quantity;
  });
  iceCreams.forEach((i) => {
    total += i.quantity * i.cost;
  });
  document.getElementById("total").innerText = total.toFixed(2);
}

function pay() {
  if (window.confirm("Are you sure?")) {
    toppings.forEach((t) => {
      t.quantity = 0;
    });
    vessels.forEach((v) => {
      v.quantity = 0;
    });
    iceCreams.forEach((i) => {
      i.quantity = 0;
    });
  }
  drawCart();
}
