const products = [
    { name: 'Arduino', price: 160.99, image: 'https://i.ibb.co/WKYLMJ2/download.webp', description: 'Arduino is an open-source electronics platform based on easy-to-use hardware and software.', stock: 10 },
    { name: 'GSM', price: 195.99, image: 'https://i.ibb.co/HtqgknH/download-1.webp', description: 'GSM (Global System for Mobile Communications) is a standard developed to describe protocols for second generation (2G) digital cellular networks.', stock: 15 },
    { name: 'ESP32', price: 100.99, image: 'https://i.ibb.co/FwYxCq8/download.jpg', description: 'The ESP32 is a series of low-cost, low-power system on a chip microcontrollers with integrated Wi-Fi and dual-mode Bluetooth.', stock: 8 },
    { name: 'DC Motor', price: 95.99, image: 'https://i.ibb.co/sVMJdJd/1-1.jpg', description: 'A DC motor is any of a class of rotary electrical motors that converts direct current electrical energy into mechanical energy.', stock: 12 },
    { name: 'Stepper Motor', price: 65.99, image: 'https://i.ibb.co/Lgq6J22/61mko-Di1vl-L-AC-UF1000-1000-QL80-FMwebp.webp', description: 'A stepper motor is a brushless DC electric motor that divides a full rotation into a number of equal steps.', stock: 5 },
    { name: 'GSM 800L', price: 110.99, image: 'https://i.ibb.co/JCNg13s/sim800-grande.jpg', description: 'GSM 800L module is used for interfacing with mobile networks for sending and receiving messages.', stock: 9 },
    { name: '4 Way Relay', price: 47.99, image: 'https://i.ibb.co/Gxb3X60/5.jpg', description: 'A 4 Way Relay Module is an interface board that allows you to control high voltage and/or high current devices.', stock: 20 },
    { name: 'Raspberry Pi', price: 250.99, image: 'https://i.ibb.co/zP9VpKG/Pi-4-1gb.jpg', description: 'Raspberry Pi is a series of small single-board computers developed to promote the teaching of basic computer science.', stock: 18 },
    { name: 'Breadboard', price: 14.99, image: 'https://i.ibb.co/3mBmRfT/mb-102-breadboard-steckbrett-mit-830-kontakten-kompatibel-mit-arduino-und-raspberry-pi-477774.jpg', description: 'A breadboard is a construction base for prototyping of electronics.', stock: 25 },
    { name: 'Jumper Wires', price: 15.99, image: 'https://i.ibb.co/ctNgHp6/Jumper-M-F-77341.jpg', description: 'Jumper wires are used to make connections between the components on a breadboard or other prototype.', stock: 30 },
    { name: 'LCD Display', price: 40.99, image: 'https://i.ibb.co/7yQ8xfy/61-YEYl-Ah-Mz-L-AC-SL1001.jpg', description: 'An LCD display is a flat-panel display that uses the light-modulating properties of liquid crystals.', stock: 17 },
    { name: 'Temperature Sensor', price: 35.99, image: 'https://i.ibb.co/g3n5G6Y/download-3.jpg', description: 'A temperature sensor is a device that collects data about temperature from a source and converts it to a form that a device can understand.', stock: 14 },
    { name: 'Ultrasonic Sensor', price: 40.99, image: 'https://i.ibb.co/Kw5M7fP/download-4.jpg', description: 'An ultrasonic sensor is a device that can measure the distance to an object by using sound waves.', stock: 11 },
    { name: 'LED', price: 1.50, image: 'https://i.ibb.co/hV5Ttzy/history-of-leds.jpg', description: 'A light-emitting diode (LED) is a semiconductor light source that emits light when current flows through it.', stock: 50 },
    { name: 'Servo Motor', price: 55.99, image: 'https://i.ibb.co/4fWPgx4/mg90s-micro-servomotor-kompatibel-mit-arduino-154289.jpg', description: 'A servo motor is a rotary actuator that allows for precise control of angular position.', stock: 7 },
    { name: 'Resistors', price: 3.99, image: 'https://i.ibb.co/XWQJ6br/electronic-axial-lead-resistors-array1482703674259212598.jpg', description: 'A resistor is a passive electrical component with the primary function to limit the flow of electric current.', stock: 100 },
    { name: 'Capacitors', price: 2.99, image: 'https://i.ibb.co/2W56gFx/5144-Lm-Hix-GL.jpg', description: 'A capacitor is a device that stores electrical energy in an electric field.', stock: 80 },
    { name: 'Transistors', price: 9.99, image: 'https://i.ibb.co/MRM3Y36/R8855671-01.jpg', description: 'A transistor is a semiconductor device used to amplify or switch electronic signals and electrical power.', stock: 75 },
    { name: 'Diodes', price: 4.99, image: 'https://i.ibb.co/ChfJ6qr/electric-diode-500x500.jpg', description: 'A diode is a semiconductor device that allows current to flow in one direction only.', stock: 60 },
    { name: 'Inductors', price: 7.99, image: 'https://i.ibb.co/9rwRs20/H758414a33eec41b785228efb7fe691146-jpg-300x300.jpg', description: 'An inductor is a passive electronic component that stores energy in the form of a magnetic field.', stock: 40 },
    { name: 'Microphone Module', price: 45.99, image: 'https://i.ibb.co/dpjkKL4/download-6.jpg', description: 'A microphone module is an electronic device used to capture audio signals and convert them to an electrical signal.', stock: 22 },
    { name: 'Vibration Sensor', price: 40.99, image: 'https://i.ibb.co/St674s5/download-7.jpg', description: 'A vibration sensor is a device that measures the amount and frequency of vibration in a given system, machine, or piece of equipment.', stock: 18 },
    { name: 'Gas Sensor', price: 55.99, image: 'https://i.ibb.co/sjkMgKC/download-8.jpg', description: 'A gas sensor is a device that detects the presence of gases in an area, often as part of a safety system.', stock: 16 },
    { name: 'IR Sensor', price: 30.99, image: 'https://i.ibb.co/w7qy1Pr/download-9.jpg', description: 'An infrared (IR) sensor is an electronic device that measures and detects infrared radiation in its surrounding environment.', stock: 21 },
    { name: 'Bluetooth Module', price: 35.99, image: 'https://i.ibb.co/r47vzYr/download-10.jpg', description: 'A Bluetooth module is a device that enables Bluetooth communication between various devices.', stock: 25 },
  ];
  
  const cart = [];
  
  function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
  }
  
  function addToCart(productName, productPrice) {
    const product = cart.find(item => item.name === productName);
    if (product) {
      product.quantity += 1;
    } else {
      cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCart();
  }
  
  function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartList = document.getElementById('cartList');
    const totalAmount = document.getElementById('totalAmount');
  
    cartCount.innerText = cart.reduce((total, item) => total + item.quantity, 0);
    cartList.innerHTML = cart.map(item => `
      <li>${item.name} - ${item.quantity} x GH${item.price.toFixed(2)} <button onclick="removeFromCart('${item.name}')">Remove</button></li>
    `).join('');
    totalAmount.innerText = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }
  
  function removeFromCart(productName) {
    const productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex > -1) {
      cart.splice(productIndex, 1);
    }
    updateCart();
  }
  
  function clearCart() {
    cart.length = 0;
    updateCart();
  }
  
  function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput) || product.description.toLowerCase().includes(searchInput));
    displayProducts(filteredProducts, 'productList');
  }
  
  function displayProducts(productArray, elementId) {
    const productList = document.getElementById(elementId);
    productList.innerHTML = productArray.map(product => `
      <div class="product-card" onclick="showProductDetail('${product.name}')">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p class="price">GH${product.price.toFixed(2)}</p>
        <div class="stock">Stock: ${product.stock}</div>
        <button class="add-to-cart" onclick="addToCart('${product.name}', ${product.price}); event.stopPropagation();">Add to Cart</button>
      </div>
    `).join('');
  }
  
  function showProductDetail(productName) {
    const product = products.find(item => item.name === productName);
    const productDetailContent = document.getElementById('productDetailContent');
    productDetailContent.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p class="price">GH${product.price.toFixed(2)}</p>
      <button class="add-to-cart" onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
    `;
    showPage('productDetail');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products, 'productList');
    displayProducts(products.slice(0, 30), 'homeProductList'); // Display first 8 products on the home page
  });
  document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products, 'productList');
    displayProducts(products.slice(0, 40), 'camerasProductList'); // Display first 8 products on the home page
  });
  // Enable back arrow key navigation
  document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
      history.back();
    }
 
   // Clear cart and favorites count after 24 hours
      setTimeout(() => {
          localStorage.removeItem('cart');
          cart = [];
          updateCartCount();
          updateFavoriteCount();
      }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
  });
