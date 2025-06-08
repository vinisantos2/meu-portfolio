const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-center py-6 text-sm text-gray-700 dark:text-gray-300">
      <p className="mb-2">&copy; 2025 Vinícius Santos. Todos os direitos reservados.</p>
      <ul className="flex justify-center flex-wrap gap-4">
        <li>
          <a
            href="https://www.linkedin.com/in/marcus-santos-2a5717143/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vinisantos2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://vs-webeapps.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            Portfólio
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/5575999913645?text=Olá,%20gostaria%20de%20falar%20sobre%20um%20site."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-green-600 dark:hover:text-green-400"
          >
            WhatsApp
          </a>
        </li>
        <li>
          <a
            href="tel:+557599991365"
            className="hover:underline hover:text-red-600 dark:hover:text-red-400"
          >
            Ligue agora
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
