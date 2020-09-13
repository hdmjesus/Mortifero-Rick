const Header = () => {
  const view = `
    <div class="Header-main flex justify-between font-display p-5 text-base bg-secondary">
      <div class="Header-logo">
        <h1>
          <a href="https://hdmjesus.github.io/Mortifero-Rick/" class=" hover:text-green-400 tracking-wide text-cyan block text-xl sm:text-2xl lg:text-3xl">
            Mortifero Rick
          </a>
        </h1>
      </div>
      <div class="Header-nav flex justify-center items-center">
        <a href="#/about/" class="lg:text-lg">
          About
        </a>
      </div>
    </div>
  `;
  return view;
};

export default Header;
