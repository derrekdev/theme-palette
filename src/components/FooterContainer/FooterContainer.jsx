import { FaGithub } from "react-icons/fa";
export default function FooterContainer() {
  return (
    <footer>
      <span>All rights reserve 2025</span>
      {/* <span>test</span> */}
      <span>
        <a href="https://github.com/derrekdev/theme-palette" target="_blank">
          <FaGithub size={18} /> Github Repo
        </a>
      </span>
    </footer>
  );
}
